import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ThreeContextType {
  registerAnimation: (id: string, animate: () => void) => void;
  unregisterAnimation: (id: string) => void;
  isVisible: boolean;
  setQuality: (quality: 'high' | 'medium' | 'low') => void;
  quality: 'high' | 'medium' | 'low';
}

const ThreeContext = createContext<ThreeContextType | null>(null);

export const ThreeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const animationsRef = useRef<Map<string, () => void>>(new Map());
  const [isVisible, setIsVisible] = useState(true);
  const frameIdRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const [quality, setQuality] = useState<'high' | 'medium' | 'low'>('high');
  const fpsRef = useRef<number>(60);
  const frameCountRef = useRef<number>(0);
  const lastFPSUpdateRef = useRef<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = (time: number) => {
      if (!isVisible) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // FPS calculation
      frameCountRef.current++;
      if (time - lastFPSUpdateRef.current >= 1000) {
        fpsRef.current = frameCountRef.current;
        frameCountRef.current = 0;
        lastFPSUpdateRef.current = time;

        // Auto quality reduction based on FPS
        if (fpsRef.current < 30 && quality === 'high') {
          setQuality('medium');
        } else if (fpsRef.current < 20 && quality === 'medium') {
          setQuality('low');
        } else if (fpsRef.current > 55 && quality === 'low') {
          setQuality('medium');
        } else if (fpsRef.current > 55 && quality === 'medium') {
          setQuality('high');
        }
      }

      // Throttle to ~60fps
      if (time - lastTimeRef.current < 16) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = time;

      // Run all registered animations
      animationsRef.current.forEach(animate => animate());
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [isVisible, quality]);

  const registerAnimation = (id: string, animate: () => void) => {
    animationsRef.current.set(id, animate);
  };

  const unregisterAnimation = (id: string) => {
    animationsRef.current.delete(id);
  };

  return (
    <ThreeContext.Provider value={{ registerAnimation, unregisterAnimation, isVisible, setQuality, quality }}>
      {children}
    </ThreeContext.Provider>
  );
};

export const useThree = () => {
  const context = useContext(ThreeContext);
  if (!context) {
    throw new Error('useThree must be used within a ThreeProvider');
  }
  return context;
};

// Shared renderer pool
const rendererPool = new Map<string, THREE.WebGLRenderer>();

export const getRenderer = (id: string, options: THREE.WebGLRendererParameters = {}) => {
  if (!rendererPool.has(id)) {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump",
      ...options
    });
    rendererPool.set(id, renderer);
  }
  return rendererPool.get(id)!;
};

export const disposeRenderer = (id: string) => {
  const renderer = rendererPool.get(id);
  if (renderer) {
    renderer.dispose();
    rendererPool.delete(id);
  }
};

// Shared scene pool
const scenePool = new Map<string, THREE.Scene>();

export const getScene = (id: string) => {
  if (!scenePool.has(id)) {
    scenePool.set(id, new THREE.Scene());
  }
  return scenePool.get(id)!;
};

export const disposeScene = (id: string) => {
  const scene = scenePool.get(id);
  if (scene) {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    scenePool.delete(id);
  }
}; 
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useThree } from '../../context/ThreeContext';

interface AnimatedBackgroundProps {
  type: 'dots' | 'cubes' | 'waves';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Object3D | null>(null);
  const frameIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [, setIsPageVisible] = useState(true);
  const { quality } = useThree();

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup with quality-based settings
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: quality === 'high',
      powerPreference: "high-performance",
      precision: quality === 'high' ? 'highp' : 'mediump',
      stencil: false,
      depth: false,
      failIfMajorPerformanceCaveat: true
    });
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Add performance monitoring with quality-based thresholds
    let frameCount = 0;
    let lastFPSUpdate = 0;
    let fps = 0;

    const updateFPS = (time: number) => {
      frameCount++;
      if (time - lastFPSUpdate >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastFPSUpdate = time;
        
        // Quality-based FPS thresholds
        const minFPS = quality === 'high' ? 30 : quality === 'medium' ? 25 : 20;
        if (fps < minFPS) {
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        } else {
          renderer.setPixelRatio(window.devicePixelRatio);
        }
      }
    };

    // Create particles based on type and quality
    const createParticles = () => {
      if (type === 'dots') {
        const geometry = new THREE.BufferGeometry();
        const particles = quality === 'high' ? 
          (window.innerWidth < 768 ? 200 : 500) : 
          quality === 'medium' ? 
            (window.innerWidth < 768 ? 150 : 300) : 
            (window.innerWidth < 768 ? 100 : 200);
        const positions = new Float32Array(particles * 3);

        for (let i = 0; i < particles * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 10;
          positions[i + 1] = (Math.random() - 0.5) * 10;
          positions[i + 2] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
          size: quality === 'high' ? 0.02 : 0.015,
          color: 0x06b6d4,
          transparent: true,
          opacity: quality === 'high' ? 0.5 : 0.4,
          sizeAttenuation: true,
          depthWrite: false
        });

        return new THREE.Points(geometry, material);
      }

      if (type === 'cubes') {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshPhongMaterial({
          color: 0x06b6d4,
          opacity: quality === 'high' ? 0.5 : 0.4,
          transparent: true,
          depthWrite: false
        });

        const group = new THREE.Group();
        const cubeCount = quality === 'high' ? 
          (window.innerWidth < 768 ? 25 : 50) : 
          quality === 'medium' ? 
            (window.innerWidth < 768 ? 20 : 35) : 
            (window.innerWidth < 768 ? 15 : 25);
        for (let i = 0; i < cubeCount; i++) {
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          );
          group.add(cube);
        }
        return group;
      }

      // Waves with quality-based segments
      const segments = quality === 'high' ? 
        (window.innerWidth < 768 ? 25 : 50) : 
        quality === 'medium' ? 
          (window.innerWidth < 768 ? 20 : 35) : 
          (window.innerWidth < 768 ? 15 : 25);
      const geometry = new THREE.PlaneGeometry(10, 10, segments, segments);
      const material = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: quality === 'high' ? 0.3 : 0.25,
        depthWrite: false
      });

      return new THREE.Mesh(geometry, material);
    };

    const particles = createParticles();
    scene.add(particles);
    particlesRef.current = particles;

    // Add lights with quality-based settings
    const ambientLight = new THREE.AmbientLight(0xffffff, quality === 'high' ? 0.5 : 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, quality === 'high' ? 0.5 : 0.4);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let lastTime = 0;
    // Animation with quality-based updates
    const animate = (time: number) => {
      if (!isVisible) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      updateFPS(time);

      // Quality-based animation throttling
      const minFrameTime = quality === 'high' ? 16 : quality === 'medium' ? 20 : 25;
      if (time - lastTime < minFrameTime) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      if (particlesRef.current) {
        const speed = quality === 'high' ? 1 : quality === 'medium' ? 0.8 : 0.6;
        if (type === 'dots' || type === 'cubes') {
          particlesRef.current.rotation.x += 0.001 * speed;
          particlesRef.current.rotation.y += 0.001 * speed;
        } else if (type === 'waves') {
          if (particlesRef.current instanceof THREE.Mesh) {
            const positions = (particlesRef.current.geometry as THREE.BufferGeometry)
              .attributes.position.array as Float32Array;
            const time = Date.now() * 0.0005 * speed;

            for (let i = 0; i < positions.length; i += 3) {
              positions[i + 2] = Math.sin(time + positions[i] * 0.5) * 0.5;
            }
            (particlesRef.current.geometry as THREE.BufferGeometry).attributes.position.needsUpdate = true;
          }
        }
      }

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);

    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle page visibility
    const handlePageVisibility = () => {
      const isPageHidden = document.hidden;
      setIsPageVisible(!isPageHidden);
      
      if (isPageHidden) {
        // Pause animation and reduce quality when page is hidden
        if (rendererRef.current) {
          rendererRef.current.setPixelRatio(0.5);
        }
      } else {
        // Resume normal quality when page is visible
        if (rendererRef.current) {
          rendererRef.current.setPixelRatio(window.devicePixelRatio);
        }
      }
    };

    document.addEventListener('visibilitychange', handlePageVisibility);

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('visibilitychange', handlePageVisibility);
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      // Enhanced cleanup of Three.js resources
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (Array.isArray(object.material)) {
              object.material.forEach(material => {
                if (material.map) material.map.dispose();
                material.dispose();
              });
            } else if (object.material) {
              if (object.material.map) object.material.map.dispose();
              object.material.dispose();
            }
          }
        });
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();
        rendererRef.current.domElement.remove();
      }

      // Clear references
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      particlesRef.current = null;
    };
  }, [type, quality]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-0"
      style={{ 
        pointerEvents: 'none',
        opacity: quality === 'high' ? 0.2 : 0.15,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedBackground;
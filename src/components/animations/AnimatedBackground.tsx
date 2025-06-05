import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

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

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles based on type
    const createParticles = () => {
      if (type === 'dots') {
        const geometry = new THREE.BufferGeometry();
        const particles = 500; // Reduced from 2000
        const positions = new Float32Array(particles * 3);

        for (let i = 0; i < particles * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 10;
          positions[i + 1] = (Math.random() - 0.5) * 10;
          positions[i + 2] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x06b6d4,
          transparent: true,
          opacity: 0.5,
        });

        return new THREE.Points(geometry, material);
      }

      if (type === 'cubes') {
        const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const material = new THREE.MeshPhongMaterial({
          color: 0x06b6d4,
          opacity: 0.5,
          transparent: true,
        });

        const group = new THREE.Group();
        for (let i = 0; i < 50; i++) { // Reduced from 100
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

      // Waves
      const geometry = new THREE.PlaneGeometry(10, 10, 50, 50); // Reduced from 100,100
      const material = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });

      return new THREE.Mesh(geometry, material);
    };

    const particles = createParticles();
    scene.add(particles);
    particlesRef.current = particles;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    let lastTime = 0;
    // Animation
    const animate = (time: number) => {
      if (!isVisible) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      // Throttle animation to ~60fps
      if (time - lastTime < 16) {
        frameIdRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      if (particlesRef.current) {
        if (type === 'dots' || type === 'cubes') {
          particlesRef.current.rotation.x += 0.001;
          particlesRef.current.rotation.y += 0.001;
        } else if (type === 'waves') {
          if (particlesRef.current instanceof THREE.Mesh) {
            const positions = (particlesRef.current.geometry as THREE.BufferGeometry)
              .attributes.position.array as Float32Array;
            const time = Date.now() * 0.0005;

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
      window.removeEventListener('resize', handleResize);
      
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }

      // Dispose of Three.js resources
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

      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-0"
      style={{ 
        pointerEvents: 'none',
        opacity: 0.2,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedBackground;
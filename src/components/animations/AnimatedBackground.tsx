import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
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
        const particles = 2000;
        const positions = new Float32Array(particles * 3);

        for (let i = 0; i < particles * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 10;
          positions[i + 1] = (Math.random() - 0.5) * 10;
          positions[i + 2] = (Math.random() - 0.5) * 10;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
          size: 0.02,
          color: 0x06b6d4, // cyan-500
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
        for (let i = 0; i < 100; i++) {
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
      const geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
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

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

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
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [type]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-0" // Added overflow-hidden
      style={{ 
        pointerEvents: 'none',
        opacity: 0.2,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default AnimatedBackground;
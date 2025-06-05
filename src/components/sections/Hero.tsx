import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import CardSection from "./CardSection";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rightSideRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const rightAnimationFrameRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const rightRendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rightCameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    // Background animation setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111827, 1);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500; // Reduced from 1500

    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    const sizeArray = new Float32Array(particleCount);

    // Define color palette
    const colorPalette = [
      new THREE.Color('#06b6d4'), // cyan-400
      new THREE.Color('#a21caf'), // purple-700
      new THREE.Color('#22c55e'), // green-400
      new THREE.Color('#2563eb'), // blue-600
    ];

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizeArray[i] = Math.random() * 2;
      // Assign random color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      color.toArray(colorArray, i * 3);
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizeArray, 1));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const gridHelper = new THREE.GridHelper(20, 20, 0x006d6f, 0x008080);
    gridHelper.position.y = -5;
    scene.add(gridHelper);

    camera.position.z = 8;

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Throttle animation to ~60fps
      if (currentTime - lastTime < 16) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      const positions = particlesGeometry.attributes.position.array;
      const waveTime = Date.now() * 0.0001;

      for (let i = 0; i < particleCount * 3; i += 3) {
        const x = positions[i];
        positions[i + 2] += Math.sin(waveTime + x * 0.5) * 0.01;
      }

      particlesGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Setup the right side 3D model
    const rightSideCanvas = rightSideRef.current;
    if (rightSideCanvas) {
      const rightScene = new THREE.Scene();
      const rightCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const rightRenderer = new THREE.WebGLRenderer({ 
        canvas: rightSideCanvas, 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        precision: "mediump"
      });

      rightCameraRef.current = rightCamera;
      rightRendererRef.current = rightRenderer;

      const containerWidth = window.innerWidth * 0.4;
      const containerHeight = window.innerHeight * 0.8;
      rightRenderer.setSize(containerWidth, containerHeight);
      rightRenderer.setClearColor(0x000000, 0);

      const cubeGroup = new THREE.Group();
      const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
      const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x06b6d4, linewidth: 2 });
      const wireframeCube = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      cubeGroup.add(wireframeCube);

      const dataPointsGeometry = new THREE.BufferGeometry();
      const dataPointCount = 50; // Reduced from 50

      const dataPointsArray = new Float32Array(dataPointCount * 3);
      for (let i = 0; i < dataPointCount * 3; i += 3) {
        dataPointsArray[i] = (Math.random() - 0.5) * 2.5;
        dataPointsArray[i + 1] = (Math.random() - 0.5) * 2.5;
        dataPointsArray[i + 2] = (Math.random() - 0.5) * 2.5;
      }

      dataPointsGeometry.setAttribute("position", new THREE.BufferAttribute(dataPointsArray, 3));
      const dataPointsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x40e0d0,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const dataPoints = new THREE.Points(dataPointsGeometry, dataPointsMaterial);
      cubeGroup.add(dataPoints);

      const linesMaterial = new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.5 });

      for (let i = 0; i < 20; i++) { // Reduced from 20
        const lineGeometry = new THREE.BufferGeometry();
        const p1 = Math.floor(Math.random() * dataPointCount);
        const p2 = Math.floor(Math.random() * dataPointCount);

        const vertices = new Float32Array([
          dataPointsArray[p1 * 3],
          dataPointsArray[p1 * 3 + 1],
          dataPointsArray[p1 * 3 + 2],
          dataPointsArray[p2 * 3],
          dataPointsArray[p2 * 3 + 1],
          dataPointsArray[p2 * 3 + 2],
        ]);

        lineGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
        const line = new THREE.Line(lineGeometry, linesMaterial);
        cubeGroup.add(line);
      }

      rightScene.add(cubeGroup);
      rightCamera.position.z = 6;

      let rightLastTime = 0;
      const animateRightSide = (currentTime: number) => {
        if (!isVisible) {
          rightAnimationFrameRef.current = requestAnimationFrame(animateRightSide);
          return;
        }

        // Throttle animation to ~60fps
        if (currentTime - rightLastTime < 16) {
          rightAnimationFrameRef.current = requestAnimationFrame(animateRightSide);
          return;
        }
        rightLastTime = currentTime;

        cubeGroup.rotation.y += 0.01;
        cubeGroup.rotation.x += 0.005;
        cubeGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;
        rightRenderer.render(rightScene, rightCamera);
        rightAnimationFrameRef.current = requestAnimationFrame(animateRightSide);
      };

      rightAnimationFrameRef.current = requestAnimationFrame(animateRightSide);
    }

    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (rightSideCanvas && rightCameraRef.current && rightRendererRef.current) {
        const newContainerWidth = window.innerWidth * 0.4;
        const newContainerHeight = window.innerHeight * 0.8;
        rightCameraRef.current.aspect = newContainerWidth / newContainerHeight;
        rightCameraRef.current.updateProjectionMatrix();
        rightRendererRef.current.setSize(newContainerWidth, newContainerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener("resize", handleResize);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rightAnimationFrameRef.current) {
        cancelAnimationFrame(rightAnimationFrameRef.current);
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
      if (rightRendererRef.current) {
        rightRendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-slate-900">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        {/* Main content section - Adjust height based on screen size */}
        <div className="flex h-[90%] lg:h-[80%] items-center justify-between">
          {/* Left side content */}
          <div className="max-w-xl mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                Learn by{" "}
                <TypeAnimation
                  sequence={[
                    "Connecting",
                    1000,
                    "Interacting",
                    1000,
                    "Practicing",
                    1000,
                    "Solving",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
                />
                <br />
                <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                  Practical, Hands-On Learning
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-bubbles opacity-90">
              <span className="text-primary-cyan font-semibold">
                {" "}
                Engaging Live Quizzes • Interactive Learning Games • Free Bootcamps • Personalized Career Support
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a href="#courses">
                <button className="bg-caribbean hover:bg-teal text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Learning Today
                </button>
              </a>
              <a href="#join">
                <button className="border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Join the Data Revolution
                </button>
              </a>
            </div>
          </div>

          {/* Right side 3D visualization - Show on medium and up */}
          <div className="hidden md:flex items-center justify-center w-1/2 h-full">
            <canvas
              ref={rightSideRef}
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Bottom card section - Show only on desktop (lg) screens */}
        <div className="hidden lg:flex h-[12%] items-center justify-between">
          {/* Left side heading */}
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                  Everyday Tech
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                  Vocabulary
                </span>
              </h2>
            </div>
            {/* Animated Arrow */}
            <div className="animate-bounce-x">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-cyan-400"
              >
                <path 
                  d="M4 12H20M20 12L14 6M20 12L14 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Card Section */}
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
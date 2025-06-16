import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import CardSection from "./CardSection";
import { useThree, getRenderer, getScene, disposeRenderer, disposeScene } from "../../context/ThreeContext";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rightSideRef = useRef<HTMLCanvasElement>(null);
  const { registerAnimation, unregisterAnimation, isVisible } = useThree();
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !rightSideRef.current) return;

    // Get shared renderer and scene
    const renderer = getRenderer('hero-main', { canvas: canvasRef.current });
    const rightRenderer = getRenderer('hero-right', { canvas: rightSideRef.current });
    const scene = getScene('hero-main');
    const rightScene = getScene('hero-right');

    // Setup camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const rightCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111827, 1);

    const containerWidth = window.innerWidth * 0.4;
    const containerHeight = window.innerHeight * 0.8;
    rightRenderer.setSize(containerWidth, containerHeight);
    rightRenderer.setClearColor(0x000000, 0);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;

    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    const sizeArray = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#06b6d4'),
      new THREE.Color('#a21caf'),
      new THREE.Color('#22c55e'),
      new THREE.Color('#2563eb'),
    ];

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 20;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizeArray[i] = Math.random() * 2;
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

    // Right side cube setup
    const cubeGroup = new THREE.Group();
    const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
    const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x06b6d4, linewidth: 2 });
    const wireframeCube = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cubeGroup.add(wireframeCube);

    rightScene.add(cubeGroup);
    rightCamera.position.z = 6;

    // Register animations
    const animate = () => {
      if (!isVisible) return;

      // Main scene animation
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

      // Right scene animation
      cubeGroup.rotation.y += 0.01;
      cubeGroup.rotation.x += 0.005;
      cubeGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;
      rightRenderer.render(rightScene, rightCamera);
    };

    registerAnimation('hero', animate);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const newContainerWidth = window.innerWidth * 0.4;
      const newContainerHeight = window.innerHeight * 0.8;
      rightCamera.aspect = newContainerWidth / newContainerHeight;
      rightCamera.updateProjectionMatrix();
      rightRenderer.setSize(newContainerWidth, newContainerHeight);
    };

    window.addEventListener("resize", handleResize);
    setIsLoaded(true);

    return () => {
      window.removeEventListener("resize", handleResize);
      unregisterAnimation('hero');
      disposeRenderer('hero-main');
      disposeRenderer('hero-right');
      disposeScene('hero-main');
      disposeScene('hero-right');
    };
  }, [registerAnimation, unregisterAnimation, isVisible]);

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
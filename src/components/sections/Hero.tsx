import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import CardSection from "./CardSection";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rightSideRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Background animation setup
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x111827, 1); // Dark background matching bg-gray-900

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;

    const posArray = new Float32Array(particleCount * 3);
    const sizeArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 20; // x
      posArray[i + 1] = (Math.random() - 0.5) * 20; // y
      posArray[i + 2] = (Math.random() - 0.5) * 20; // z

      // Size
      sizeArray[i / 3] = Math.random() * 2;
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizeArray, 1));

    // Create material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffff, // primary-cyan
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create mesh for particles
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add a grid to represent data
    const gridHelper = new THREE.GridHelper(20, 20, 0x006d6f, 0x008080);
    gridHelper.position.y = -5;
    scene.add(gridHelper);

    // Camera position
    camera.position.z = 8;

    // Animation function
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Rotate particles slowly
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Wave motion
      const positions = particlesGeometry.attributes.position.array;
      const time = Date.now() * 0.0001;

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Creating a wave effect
        const x = positions[i];

        // Small wave adjustment based on position
        positions[i + 2] += Math.sin(time + x * 0.5) * 0.01;
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Setup the right side 3D model (data visualization)
    const rightSideCanvas = rightSideRef.current;
    if (rightSideCanvas) {
      const rightScene = new THREE.Scene();
      const rightCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const rightRenderer = new THREE.WebGLRenderer({ canvas: rightSideCanvas, antialias: true, alpha: true });

      // Set initial size based on current window dimensions
      const containerWidth = window.innerWidth * 0.4; // Approximately taking half of the screen
      const containerHeight = window.innerHeight * 0.8;
      rightRenderer.setSize(containerWidth, containerHeight);
      rightRenderer.setClearColor(0x000000, 0);

      // Create a stylized data visualization cube
      const cubeGroup = new THREE.Group();

      // Create the main cube
      const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
      const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
      const wireframeCube = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      cubeGroup.add(wireframeCube);

      // Add floating data points inside the cube
      const dataPointsGeometry = new THREE.BufferGeometry();
      const dataPointCount = 50;

      const dataPointsArray = new Float32Array(dataPointCount * 3);
      for (let i = 0; i < dataPointCount * 3; i += 3) {
        dataPointsArray[i] = (Math.random() - 0.5) * 2.5;
        dataPointsArray[i + 1] = (Math.random() - 0.5) * 2.5;
        dataPointsArray[i + 2] = (Math.random() - 0.5) * 2.5;
      }

      dataPointsGeometry.setAttribute("position", new THREE.BufferAttribute(dataPointsArray, 3));

      const dataPointsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x40e0d0, // turquoise
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      const dataPoints = new THREE.Points(dataPointsGeometry, dataPointsMaterial);
      cubeGroup.add(dataPoints);

      // Add connecting lines between some of the points to represent relationships
      const linesMaterial = new THREE.LineBasicMaterial({ color: 0x008b8b, transparent: true, opacity: 0.5 });

      for (let i = 0; i < 20; i++) {
        const lineGeometry = new THREE.BufferGeometry();

        // Connect random points
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

      // Position the camera
      rightCamera.position.z = 6;

      // Animate the right side
      const animateRightSide = () => {
        requestAnimationFrame(animateRightSide);

        // Rotate the cube group
        cubeGroup.rotation.y += 0.01;
        cubeGroup.rotation.x += 0.005;

        // Gentle floating animation
        cubeGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;

        rightRenderer.render(rightScene, rightCamera);
      };

      animateRightSide();

      // Handle window resize for right side
      const handleRightResize = () => {
        const newContainerWidth = window.innerWidth * 0.4;
        const newContainerHeight = window.innerHeight * 0.8;

        rightCamera.aspect = newContainerWidth / newContainerHeight;
        rightCamera.updateProjectionMatrix();
        rightRenderer.setSize(newContainerWidth, newContainerHeight);
      };

      window.addEventListener("resize", handleRightResize);

      // Clean up right side event listeners
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("resize", handleRightResize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }

    // Clean up main canvas event listeners if right side didn't initialize
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
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
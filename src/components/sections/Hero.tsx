// import { useState, useEffect, useRef } from "react";
// import type { HeroProps } from "../../types";
// import { TypeAnimation } from "react-type-animation";

// const Hero = ({
//   videoBaseUrl = "https://res.cloudinary.com/dn1yynudz/video/upload/v1744624952/bg_hero8_ecjby1",
//   forwardDuration = 7.5,
// }: HeroProps) => {
//   const videoProps = {
//     preload: "auto", 
//     playsInline: true,
//     muted: true,
//     loading: "eager",
//   };
//   const [isInitialLoad, setIsInitialLoad] = useState(true);
//   const [activeVideo, setActiveVideo] = useState<"forward" | "reverse">("forward");
//   const forwardVideoRef = useRef<HTMLVideoElement>(null);
//   const reverseVideoRef = useRef<HTMLVideoElement>(null);
  
//   // Forward and reverse video URLs
//   const forwardVideoUrl = videoBaseUrl;
//   const reverseVideoUrl = videoBaseUrl.replace("/upload/", "/upload/e_reverse/");

//   useEffect(() => {
//     const forwardVideo = forwardVideoRef.current;
//     const reverseVideo = reverseVideoRef.current;
//     if (!forwardVideo || !reverseVideo) return;

//     // Preload both videos immediately
//     const preloadVideos = () => {
//       forwardVideo.load();
//       reverseVideo.load();
      
//       // Start loading reverse video data in the background
//       reverseVideo.currentTime = 0.001;
//       setTimeout(() => {
//         reverseVideo.currentTime = 0;
//       }, 100);
      
//       // Start playing forward video
//       forwardVideo.play().catch(e => console.log("Autoplay prevented:", e));
//     };

//     // Function to switch between videos with pre-buffering
//     const switchToReverseVideo = () => {
//       // Start transition before current video actually ends
//       forwardVideo.style.opacity = "0";
//       reverseVideo.style.opacity = "1";
      
//       // Small delay to ensure smooth transition
//       setTimeout(() => {
//         // Ensure reverse video is ready and at the beginning
//         if (reverseVideo.readyState >= 3) {
//           reverseVideo.currentTime = 0;
//           reverseVideo.play().catch(e => console.log("Playback error:", e));
//           setActiveVideo("reverse");
//         } else {
//           // If video is not ready, try again shortly
//           reverseVideo.addEventListener("canplay", () => {
//             reverseVideo.currentTime = 0;
//             reverseVideo.play().catch(e => console.log("Playback error:", e));
//             setActiveVideo("reverse");
//           }, { once: true });
//         }
//       }, 50);
//     };

//     const switchToForwardVideo = () => {
//       // Start transition before current video actually ends
//       reverseVideo.style.opacity = "0";
//       forwardVideo.style.opacity = "1";
      
//       // Small delay to ensure smooth transition
//       setTimeout(() => {
//         // Ensure forward video is ready
//         if (forwardVideo.readyState >= 3) {
//           forwardVideo.currentTime = 0;
//           forwardVideo.play().catch(e => console.log("Playback error:", e));
//           setActiveVideo("forward");
//         } else {
//           // If video is not ready, try again shortly
//           forwardVideo.addEventListener("canplay", () => {
//             forwardVideo.currentTime = 0;
//             forwardVideo.play().catch(e => console.log("Playback error:", e));
//             setActiveVideo("forward");
//           }, { once: true });
//         }
//       }, 50);
//     };

//     // Start transition slightly before video ends to avoid gap
//     const handleForwardTimeUpdate = () => {
//       if (forwardVideo.currentTime >= forwardDuration - 0.1) {
//         forwardVideo.removeEventListener("timeupdate", handleForwardTimeUpdate);
//         switchToReverseVideo();
//       }
//     };

//     // Start transition slightly before video ends to avoid gap
//     const handleReverseTimeUpdate = () => {
//       // For reverse video, we'll trigger the switch when it's close to ending
//       if (reverseVideo.duration && reverseVideo.currentTime >= reverseVideo.duration - 0.1) {
//         reverseVideo.removeEventListener("timeupdate", handleReverseTimeUpdate);
//         switchToForwardVideo();
//       }
//     };

//     // Initial setup
//     if (isInitialLoad) {
//       preloadVideos();
//       setIsInitialLoad(false);
//     }

//     // Set up event listeners - use timeupdate for both videos
//     forwardVideo.addEventListener("timeupdate", handleForwardTimeUpdate);
//     reverseVideo.addEventListener("timeupdate", handleReverseTimeUpdate);

//     return () => {
//       forwardVideo.removeEventListener("timeupdate", handleForwardTimeUpdate);
//       reverseVideo.removeEventListener("timeupdate", handleReverseTimeUpdate);
//     };
//   }, [activeVideo, forwardDuration, isInitialLoad]);

//   return (
//     <div className="relative h-[100vh] w-full overflow-hidden">
//       <div className="absolute inset-0 w-full h-full z-0 bg-gray-900">
//         {/* Forward video */}
//         <video
//           ref={forwardVideoRef}
//           {...videoProps}
//           className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 z-1"
//           style={{ opacity: activeVideo === "forward" ? 1 : 0 }}
//           aria-hidden="true"
//         >
//           <source src={`${forwardVideoUrl}.mp4`} type="video/mp4" />
//           <source src={`${forwardVideoUrl}.webm`} type="video/webm" />
//         </video>
        
//         {/* Reverse video */}
//         <video
//           ref={reverseVideoRef}
//           {...videoProps}
//           className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 z-1"
//           style={{ opacity: activeVideo === "reverse" ? 1 : 0 }}
//           aria-hidden="true"
//         >
//           <source src={`${reverseVideoUrl}.mp4`} type="video/mp4" />
//           <source src={`${reverseVideoUrl}.webm`} type="video/webm" />
//         </video>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 h-full">
//         <div className="flex h-full items-center justify-between">
//           <div className="max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
//                 Learn by{" "}
//                 <TypeAnimation
//                   sequence={[
//                     "Connecting",
//                     1000,
//                     "Interacting",
//                     1000,
//                     "Practicing",
//                     1000,
//                     "Solving",
//                     1000,
//                   ]}
//                   wrapper="span"
//                   speed={50}
//                   repeat={Infinity}
//                   className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
//                 />
//                 <br />
//                 <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
//                   Accelerate Your Career with Practical, Hands-On Learning
//                 </span>
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-bubbles opacity-90">
//               <span className="text-primary-cyan font-semibold">
//                 {" "}
//                 Engaging Live Quizzes • Interactive Learning Games • Mock Interviews • Personalized Career Support
//               </span>
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <a href="#courses">
//                 <button className="bg-caribbean hover:bg-teal text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
//                   Start Learning Today
//                 </button>
//               </a>
//               <a href="#join">
//                 <button className="border-2 border-primary-cyan hover:bg-primary-cyan/20 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
//                   Join the Data Revolution
//                 </button>
//               </a>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center justify-center">
//             {/* Content for right side can be added here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import {  useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";

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
      posArray[i] = (Math.random() - 0.5) * 20;      // x
      posArray[i + 1] = (Math.random() - 0.5) * 20;  // y
      posArray[i + 2] = (Math.random() - 0.5) * 20;  // z
      
      // Size
      sizeArray[i/3] = Math.random() * 2;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizeArray, 1));
    
    // Create material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00FFFF, // primary-cyan
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    // Create mesh for particles
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Add a grid to represent data
    const gridHelper = new THREE.GridHelper(20, 20, 0x006D6F, 0x008080);
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
    
    window.addEventListener('resize', handleResize);
    
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
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x00FFFF, linewidth: 2 });
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
      
      dataPointsGeometry.setAttribute('position', new THREE.BufferAttribute(dataPointsArray, 3));
      
      const dataPointsMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x40E0D0, // turquoise
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      
      const dataPoints = new THREE.Points(dataPointsGeometry, dataPointsMaterial);
      cubeGroup.add(dataPoints);
      
      // Add connecting lines between some of the points to represent relationships
      const linesMaterial = new THREE.LineBasicMaterial({ color: 0x008B8B, transparent: true, opacity: 0.5 });
      
      for (let i = 0; i < 20; i++) {
        const lineGeometry = new THREE.BufferGeometry();
        
        // Connect random points
        const p1 = Math.floor(Math.random() * dataPointCount);
        const p2 = Math.floor(Math.random() * dataPointCount);
        
        const vertices = new Float32Array([
          dataPointsArray[p1 * 3], dataPointsArray[p1 * 3 + 1], dataPointsArray[p1 * 3 + 2],
          dataPointsArray[p2 * 3], dataPointsArray[p2 * 3 + 1], dataPointsArray[p2 * 3 + 2]
        ]);
        
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
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
      
      window.addEventListener('resize', handleRightResize);
      
      // Clean up right side event listeners
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('resize', handleRightResize);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
    
    // Clean up main canvas event listeners if right side didn't initialize
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="max-w-xl">
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
                  Accelerate Your Career with Practical, Hands-On Learning
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-bubbles opacity-90">
              <span className="text-primary-cyan font-semibold">
                {" "}
                Engaging Live Quizzes • Interactive Learning Games • Mock Interviews • Personalized Career Support
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

          <div className="hidden md:flex items-center justify-center w-1/2 h-full">
            {/* 3D Data Visualization Model */}
            <canvas
              ref={rightSideRef}
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
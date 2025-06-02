import React, { useRef, useEffect, useState } from 'react';
import { BsLinkedin, BsYoutube, BsInstagram } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../../utils/scrollUtils";
import * as THREE from 'three';

// Extended Mesh type with AI properties - FIXED
class AIParticle extends THREE.Mesh {
  velocity: THREE.Vector3;
  targetPosition: THREE.Vector3;
  aiState: 'learning' | 'processing' | 'analyzing';
  dataValue: number;
  connections: AIParticle[];

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) {
    super(geometry, material);
    this.velocity = new THREE.Vector3();
    this.targetPosition = new THREE.Vector3();
    this.aiState = 'learning';
    this.dataValue = 0;
    this.connections = [];
  }
}

// Neural Network Node - FIXED
class NeuralNode extends THREE.Mesh {
  activation: number;
  layer: number;
  nodeIndex: number;

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) {
    super(geometry, material);
    this.activation = 0;
    this.layer = 0;
    this.nodeIndex = 0;
  }
}

// Advanced AI-Powered 3D Background
const AIDataVisualization: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameId = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Advanced Scene Setup with Post-Processing
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0f172a, 10, 50);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
      precision: "highp"
    });
    
    renderer.setSize(window.innerWidth, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // AI Data Particles with Intelligence
    const aiParticles: AIParticle[] = [];
    const neuralNodes: NeuralNode[] = [];
    const particleCount = 80;
    const layers = 5;

    // Create Neural Network Visualization
    for (let layer = 0; layer < layers; layer++) {
      const nodesInLayer = Math.floor(8 - layer * 1.2);
      for (let node = 0; node < nodesInLayer; node++) {
        const geometry = new THREE.SphereGeometry(0.08, 16, 16);
        const material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color().setHSL(0.5 + layer * 0.1, 1, 0.6),
          transparent: true,
          opacity: 0.8,
          emissive: new THREE.Color().setHSL(0.5 + layer * 0.1, 0.5, 0.1)
        });
        
        const neuralNode = new NeuralNode(geometry, material);
        neuralNode.position.set(
          (layer - layers/2) * 4,
          (node - nodesInLayer/2) * 1.5,
          Math.sin(layer + node) * 2
        );
        
        neuralNode.activation = Math.random();
        neuralNode.layer = layer;
        neuralNode.nodeIndex = node;
        neuralNode.castShadow = true;
        
        neuralNodes.push(neuralNode);
        scene.add(neuralNode);
      }
    }

    // Advanced AI Particles with Data Processing Behavior
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.05, 1);
      const hue = (i / particleCount) * 0.3 + 0.4; // Cyan to blue spectrum
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL(hue, 1, 0.7),
        transparent: true,
        opacity: 0.9,
        emissive: new THREE.Color().setHSL(hue, 0.8, 0.2),
        shininess: 100
      });
      
      const particle = new AIParticle(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20
      );
      
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      
      particle.targetPosition = new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 15
      );
      
      particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
      particle.dataValue = Math.random();
      particle.connections = [];
      particle.castShadow = true;
      
      aiParticles.push(particle);
      scene.add(particle);
    }

    // Data Flow Streams (representing SQL queries and Python scripts)
    const createDataStream = (color: number, complexity: number) => {
      const points: THREE.Vector3[] = [];
      const segments = 150;
      
      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const x = Math.sin(t * Math.PI * complexity) * 8 + Math.cos(t * Math.PI * 2) * 2;
        const y = Math.cos(t * Math.PI * complexity * 0.7) * 4 + Math.sin(t * Math.PI * 3) * 1;
        const z = t * 20 - 10 + Math.sin(t * Math.PI * 5) * 2;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color,
        transparent: true,
        opacity: 0.6,
        linewidth: 2
      });
      
      return new THREE.Line(geometry, material);
    };

    // SQL Stream (Blue)
    const sqlStream = createDataStream(0x3b82f6, 4);
    scene.add(sqlStream);

    // Python Stream (Green)
    const pythonStream = createDataStream(0x10b981, 6);
    scene.add(pythonStream);

    // AI Analysis Stream (Purple)
    const aiStream = createDataStream(0x8b5cf6, 8);
    scene.add(aiStream);

    // Holographic Data Matrices
    const createHolographicMatrix = () => {
      const matrixGroup = new THREE.Group();
      
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const geometry = new THREE.PlaneGeometry(0.3, 0.3);
          const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0.1 + Math.random() * 0.3,
            side: THREE.DoubleSide
          });
          
          const plane = new THREE.Mesh(geometry, material);
          plane.position.set(i - 5, j - 5, 0);
          matrixGroup.add(plane);
        }
      }
      
      return matrixGroup;
    };

    const matrix1 = createHolographicMatrix();
    matrix1.position.set(-15, 0, -10);
    matrix1.rotation.y = Math.PI / 4;
    scene.add(matrix1);

    const matrix2 = createHolographicMatrix();
    matrix2.position.set(15, 0, -5);
    matrix2.rotation.y = -Math.PI / 4;
    scene.add(matrix2);

    // Advanced Lighting System
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xff0080, 0.8, 50);
    pointLight1.position.set(-10, 5, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0080ff, 0.8, 50);
    pointLight2.position.set(10, -5, -10);
    scene.add(pointLight2);

    // Position camera
    camera.position.set(0, 2, 12);
    camera.lookAt(0, 0, 0);

    let time = 0;

    // Advanced AI Animation Loop
    const animate = (): void => {
      frameId.current = requestAnimationFrame(animate);
      time += 0.01;

      // Neural Network Pulsing
      neuralNodes.forEach((node: NeuralNode, index: number) => {
        node.activation = (Math.sin(time * 2 + index) + 1) / 2;
        const scale = 0.8 + node.activation * 0.6;
        node.scale.setScalar(scale);
        
        const material = node.material as THREE.MeshPhongMaterial;
        material.emissive.setHSL(0.5 + node.layer * 0.1, 0.5, node.activation * 0.3);
      });

      // AI Particle Intelligence
      aiParticles.forEach((particle: AIParticle, index: number) => {
        // AI State-based behavior
        switch (particle.aiState) {
          case 'learning':
            particle.rotation.x += 0.02;
            particle.rotation.y += 0.01;
            break;
          case 'processing':
            particle.rotation.z += 0.03;
            const pulseScale = 1 + Math.sin(time * 4 + index) * 0.3;
            particle.scale.setScalar(pulseScale);
            break;
          case 'analyzing':
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.02;
            particle.rotation.z += 0.01;
            break;
        }

        // Intelligent movement towards target
        const direction = particle.targetPosition.clone().sub(particle.position);
        if (direction.length() < 0.5) {
          particle.targetPosition.set(
            (Math.random() - 0.5) * 25,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 15
          );
        }
        
        direction.normalize().multiplyScalar(0.01);
        particle.velocity.lerp(direction, 0.05);
        particle.position.add(particle.velocity);
        
        // Change AI state occasionally
        if (Math.random() < 0.001) {
          particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
        }
      });

      // Animate Data Streams
      sqlStream.rotation.y += 0.005;
      sqlStream.position.z = Math.sin(time) * 2;
      
      pythonStream.rotation.y -= 0.007;
      pythonStream.position.x = Math.cos(time * 0.8) * 3;
      
      aiStream.rotation.x += 0.003;
      aiStream.rotation.z += 0.004;

      // Animate Holographic Matrices
      matrix1.rotation.y += 0.002;
      matrix1.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshBasicMaterial;
          material.opacity = 0.1 + Math.sin(time * 2 + index * 0.1) * 0.2;
        }
      });

      matrix2.rotation.y -= 0.003;
      matrix2.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshBasicMaterial;
          material.opacity = 0.1 + Math.cos(time * 1.5 + index * 0.15) * 0.2;
        }
      });

      // Dynamic connections between AI particles
      const connectionLines: THREE.Line[] = [];
      for (let i = 0; i < aiParticles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 5, aiParticles.length); j++) {
          const distance = aiParticles[i].position.distanceTo(aiParticles[j].position);
          if (distance < 4) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              aiParticles[i].position,
              aiParticles[j].position
            ]);
            const material = new THREE.LineBasicMaterial({ 
              color: 0x00ffff,
              transparent: true,
              opacity: (4 - distance) / 4 * 0.5
            });
            const line = new THREE.Line(geometry, material);
            connectionLines.push(line);
            scene.add(line);
          }
        }
      }

      // Clean up old connections
      setTimeout(() => {
        connectionLines.forEach(line => scene.remove(line));
      }, 50);

      // Camera movement
      camera.position.x = Math.sin(time * 0.2) * 2;
      camera.position.y = 2 + Math.cos(time * 0.15) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = (): void => {
      if (rendererRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = 400;
        rendererRef.current.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div ref={mountRef} className="w-full h-full" />
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="text-cyan-400 text-lg animate-pulse">Initializing AI Systems...</div>
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleNavigation = (sectionId: string, e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    scrollToSection(sectionId, location.pathname);
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 text-cyan-100 relative overflow-hidden min-h-[500px]">
      {/* Advanced AI Background */}
      <div className="absolute inset-0 w-full h-full">
        <AIDataVisualization />
      </div>

      {/* Holographic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse top-1/4"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse top-2/4 animation-delay-1000"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse top-3/4 animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* AI Header with Glitch Effect */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-wider">
            DATASENSE.AI
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-2"></div>
          <div className="text-cyan-300/80 text-lg font-mono">Advanced Data Intelligence Platform</div>
        </div>
        
        {/* Main Footer Content with Futuristic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-stretch">
          {/* Company Info */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-md bg-slate-800/40 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center font-mono">
                <span className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-ping"></span>
                SYSTEM.INFO
              </h3>
              <p className="text-cyan-300/90 mb-6 leading-relaxed">
                Next-generation AI platform for data scientists, analysts, and ML engineers seeking mastery.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="https://www.linkedin.com/company/data-sense-lms/" className="group/social relative">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur group-hover/social:bg-cyan-400/40 transition-all"></div>
                  <div className="relative text-cyan-400 hover:text-white transition-all duration-300 p-3 rounded-lg border border-cyan-400/30 hover:border-cyan-400/60">
                    <BsLinkedin size={24} />
                  </div>
                </a>
                <a href="https://www.youtube.com/@Senseofdata" className="group/social relative">
                  <div className="absolute inset-0 bg-red-400/20 rounded-lg blur group-hover/social:bg-red-400/40 transition-all"></div>
                  <div className="relative text-red-400 hover:text-white transition-all duration-300 p-3 rounded-lg border border-red-400/30 hover:border-red-400/60">
                    <BsYoutube size={24} />
                  </div>
                </a>
                <a href="https://www.instagram.com/senseofdata/" className="group/social relative">
                  <div className="absolute inset-0 bg-purple-400/20 rounded-lg blur group-hover/social:bg-purple-400/40 transition-all"></div>
                  <div className="relative text-purple-400 hover:text-white transition-all duration-300 p-3 rounded-lg border border-purple-400/30 hover:border-purple-400/60">
                    <BsInstagram size={24} />
                  </div>
                </a>
              </div>
              <div className="text-cyan-300/60 font-mono text-sm">
                <p>&copy; {currentYear} DataSense.AI | Neural Network Active</p>
              </div>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-md bg-slate-800/40 p-8 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center font-mono">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-ping"></span>
                NAV.MATRIX
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '#services' },
                  { name: 'Courses', href: '#courses' },
                  { name: 'Contact', href: '#contact' }
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <Link
                      to={item.href}
                      className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 block py-2 px-4 rounded-lg hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/30 font-mono"
                      onClick={item.href.startsWith('#') ? (e) => handleNavigation(item.href.substring(1), e) : undefined}
                    >
                      <span className="mr-2 text-cyan-400">{'>'}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Training Modules */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-md bg-slate-800/40 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center font-mono">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></span>
                AI.MODULES
              </h3>
              <ul className="space-y-4">
                {[
                  { name: 'SQL Mastery', href: '/courses/sql', level: 'Advanced' },
                  { name: 'Python AI/ML', href: '/courses/python', level: 'Expert' },
                  { name: 'Neural Networks', href: '/courses/aiml', level: 'Pro' },
                  { name: 'Career AI', href: '#topmate', level: 'Strategic' }
                ].map((item, index) => (
                  <li key={index} className="group/item">
                    <Link
                      to={item.href}
                      className="text-cyan-300/80 hover:text-cyan-300 transition-all duration-300 block py-3 px-4 rounded-lg hover:bg-green-400/10 border border-transparent hover:border-green-400/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-mono">{item.name}</span>
                        <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">{item.level}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Communication Hub */}
          <div className="group relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative backdrop-blur-md bg-slate-800/40 p-8 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center font-mono">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-ping"></span>
                COMM.HUB
              </h3>
              <ul className="space-y-4">
                <li className="group/contact">
                  <a 
                    href="mailto:datasense.learning@gmail.com" 
                    className="text-cyan-300/80 hover:text-cyan-300 transition-colors duration-300 font-mono text-sm block py-2 px-3 rounded-lg hover:bg-blue-400/10"
                  >
                    📧 datasense.learning@gmail.com
                  </a>
                </li>
                <li className="text-cyan-300/80 font-mono text-sm py-2 px-3">
                  📞 +1 201 893 6385<br />
                  📱 +91 989 688 9051
                </li>
                <li className="text-cyan-300/80 font-mono text-sm py-2 px-3">
                  🏢 85 CourtHouse PI<br />
                  Jersey City, NJ - 07306
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Matrix Grid */}
        <div className="border-t border-cyan-400/30 pt-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 text-cyan-400/80 font-mono text-sm">
              <span>Neural Network Status: ACTIVE</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>AI Learning Mode: ENABLED</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>Data Processing: OPTIMIZED</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
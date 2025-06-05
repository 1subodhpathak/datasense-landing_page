import React, { useRef, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import CeoMessage from "./CeoMessage";
import AnimatedIcon from "./AnimatedIcon";

// Extended Mesh type with AI properties
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

// Neural Network Node
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

// AI-Powered 3D Background Component
const AIServicesVisualization: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameId = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Advanced Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0f172a, 5, 40);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 600, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, 600);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // AI Data Particles
    const aiParticles: AIParticle[] = [];
    const neuralNodes: NeuralNode[] = [];
    const particleCount = 60;
    const layers = 4;

    // Create Neural Network
    for (let layer = 0; layer < layers; layer++) {
      const nodesInLayer = Math.floor(6 - layer * 1);
      for (let node = 0; node < nodesInLayer; node++) {
        const geometry = new THREE.SphereGeometry(0.06, 12, 12);
        const material = new THREE.MeshPhongMaterial({ 
          color: new THREE.Color().setHSL(0.6 + layer * 0.1, 1, 0.5),
          transparent: true,
          opacity: 0.7,
          emissive: new THREE.Color().setHSL(0.6 + layer * 0.1, 0.5, 0.1)
        });
        
        const neuralNode = new NeuralNode(geometry, material);
        neuralNode.position.set(
          (layer - layers/2) * 3,
          (node - nodesInLayer/2) * 1.2,
          Math.sin(layer + node) * 1.5
        );
        
        neuralNode.activation = Math.random();
        neuralNode.layer = layer;
        neuralNode.nodeIndex = node;
        
        neuralNodes.push(neuralNode);
        scene.add(neuralNode);
      }
    }

    // AI Particles with Intelligence
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.OctahedronGeometry(0.04, 1);
      const hue = (i / particleCount) * 0.4 + 0.5;
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL(hue, 1, 0.6),
        transparent: true,
        opacity: 0.8,
        emissive: new THREE.Color().setHSL(hue, 0.8, 0.15)
      });
      
      const particle = new AIParticle(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 15
      );
      
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015,
        (Math.random() - 0.5) * 0.015
      );
      
      particle.targetPosition = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 12
      );
      
      particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
      
      aiParticles.push(particle);
      scene.add(particle);
    }

    // Data Streams
    const createDataStream = (color: number, complexity: number) => {
      const points: THREE.Vector3[] = [];
      const segments = 100;
      
      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const x = Math.sin(t * Math.PI * complexity) * 6 + Math.cos(t * Math.PI * 1.5) * 1.5;
        const y = Math.cos(t * Math.PI * complexity * 0.6) * 3 + Math.sin(t * Math.PI * 2.5) * 0.8;
        const z = t * 15 - 7.5 + Math.sin(t * Math.PI * 4) * 1.5;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color,
        transparent: true,
        opacity: 0.5
      });
      
      return new THREE.Line(geometry, material);
    };

    const stream1 = createDataStream(0x00ffff, 3);
    const stream2 = createDataStream(0x8b5cf6, 5);
    const stream3 = createDataStream(0x10b981, 4);
    
    scene.add(stream1);
    scene.add(stream2);
    scene.add(stream3);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.8);
    directionalLight.position.set(8, 8, 4);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xff0080, 0.6, 40);
    pointLight1.position.set(-8, 4, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0080ff, 0.6, 40);
    pointLight2.position.set(8, -4, -8);
    scene.add(pointLight2);

    camera.position.set(0, 1, 10);
    camera.lookAt(0, 0, 0);

    let time = 0;

    const animate = (): void => {
      frameId.current = requestAnimationFrame(animate);
      time += 0.008;

      // Neural Network Animation
      neuralNodes.forEach((node: NeuralNode, index: number) => {
        node.activation = (Math.sin(time * 1.5 + index) + 1) / 2;
        const scale = 0.7 + node.activation * 0.5;
        node.scale.setScalar(scale);
        
        const material = node.material as THREE.MeshPhongMaterial;
        material.emissive.setHSL(0.6 + node.layer * 0.1, 0.5, node.activation * 0.25);
      });

      // AI Particle Behavior
      aiParticles.forEach((particle: AIParticle, index: number) => {
        switch (particle.aiState) {
          case 'learning':
            particle.rotation.x += 0.015;
            particle.rotation.y += 0.008;
            break;
          case 'processing':
            particle.rotation.z += 0.02;
            const pulseScale = 1 + Math.sin(time * 3 + index) * 0.25;
            particle.scale.setScalar(pulseScale);
            break;
          case 'analyzing':
            particle.rotation.x += 0.008;
            particle.rotation.y += 0.015;
            particle.rotation.z += 0.008;
            break;
        }

        const direction = particle.targetPosition.clone().sub(particle.position);
        if (direction.length() < 0.4) {
          particle.targetPosition.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 12
          );
        }
        
        direction.normalize().multiplyScalar(0.008);
        particle.velocity.lerp(direction, 0.04);
        particle.position.add(particle.velocity);
        
        if (Math.random() < 0.0008) {
          particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
        }
      });

      // Animate Streams
      stream1.rotation.y += 0.003;
      stream2.rotation.x += 0.002;
      stream3.rotation.z += 0.004;

      camera.position.x = Math.sin(time * 0.15) * 1.5;
      camera.position.y = 1 + Math.cos(time * 0.12) * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    const handleResize = (): void => {
      if (rendererRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = 600;
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
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="text-cyan-400 text-lg animate-pulse font-mono">Initializing AI Services...</div>
        </div>
      )}
    </div>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  isMain?: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: 'learn' | 'practice' | 'compete' | 'ai' | 'expert';
  buttonText?: string;
  gifSrc?: string;
}

const ServicesMain: React.FC = () => {
  const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, isMain = false }) => (
    <>
      {isMain ? (
        <div className="relative mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 group font-mono tracking-wider">
            <span className="text-cyan-100 group-hover:text-bright-cyan transition-colors duration-500 drop-shadow-[0_0_8px_#00ffff40]">
              WHY CHOOSE{" "}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all duration-500">
              DATASENSE
            </span>
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
        </div>
      ) : (
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4 font-mono">
          {title}
        </h2>
      )}
      
      <div className="text-center mb-4">
        <p className={`text-2xl text-cyan-300/90 mb-4 mx-auto font-mono ${isMain ? 'md:text-3xl' : ''}`}>
          {subtitle}
        </p>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"></div>
      </div>
  
      <p className={`text-lg text-center text-cyan-100/80 mb-16 mx-auto max-w-4xl leading-relaxed ${isMain ? 'md:text-xl' : ''}`}>
        {description}
      </p>
    </>
  );

  const serviceLinks = {
    'Learn Data Skills': '#courses',
    'Practice Real Time': '#practice',
    'Play & Compete': '#gaming-arena',
    'AI Integrated Services': '#ai-services',
    'Expert Services': '#expert-services'
  } as const;

  const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({ 
    title, 
    description, 
    iconType, 
    buttonText = "INITIALIZE",
    gifSrc,
    index
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = () => {
      const targetSection = serviceLinks[title as keyof typeof serviceLinks];
      if (targetSection) {
        navigate(`${location.pathname}${targetSection}`);
        const element = document.querySelector(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    return (
      <div 
        className={`opacity-0 translate-y-12 animate-[fadeIn_0.8s_ease-out_forwards] 
                    [animation-delay:${index * 0.15}s] relative w-full max-w-sm mx-auto group`}
      >
        {/* Holographic Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
        
        {/* Book Container */}
        <div 
          className="book-container relative h-[420px] w-[320px] mx-auto 
                     transform-gpu preserve-3d flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Status Indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse z-20 border-2 border-slate-900"></div>
          
          {/* Book Cover */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-cyan-900/90 
                       rounded-xl cursor-pointer border-2 border-cyan-400/40 hover:border-cyan-400/80
                       flex flex-col items-center justify-center gap-6 p-8
                       origin-left book-cover backdrop-blur-md ${isHovered ? 'book-open' : ''}
                       shadow-[0_8px_32px_rgba(0,255,255,0.1)] hover:shadow-[0_12px_48px_rgba(0,255,255,0.2)]
                       transition-all duration-700`}
          >
            {/* Scanlines Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-1/4 animate-pulse"></div>
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent top-2/4 animate-pulse animation-delay-1000"></div>
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent top-3/4 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Front Content */}
            <div className="book-content-front relative z-10">
              {gifSrc ? (
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur animate-pulse"></div>
                  <img 
                    src={gifSrc} 
                    alt={title} 
                    className="relative w-48 h-48 object-contain rounded-lg border border-cyan-400/30" 
                  />
                </div>
              ) : (
                <div className="text-cyan-400 scale-150 mb-6">
                  <AnimatedIcon type={iconType} />
                </div>
              )}

              <h3 className="text-xl font-bold text-cyan-400 text-center 
                           text-shadow-[0_0_8px_#00ffff] tracking-wide font-mono">
                {title}
              </h3>
              
              {/* Neural Network Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-full animate-pulse 
                               ${i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-purple-400' : 'bg-blue-400'}`}
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Book Content (Inside Pages) */}
          <div className="absolute inset-0 p-8 pl-16 flex flex-col items-center 
                        justify-between text-center book-content-back
                        bg-gradient-to-br from-slate-900/95 to-cyan-950/95 rounded-xl
                        backdrop-blur-md border-l-2 border-cyan-400/30">
            
            {/* Matrix Background Effect */}
            <div className="absolute inset-0 opacity-10 overflow-hidden rounded-xl">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute text-cyan-400 font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
            
            <div className="mt-12 relative z-10">
              <div className="text-cyan-400/60 font-mono text-xs mb-2 tracking-wider">
                AI.MODULE.{String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-cyan-300/90 text-sm leading-relaxed font-mono">
                {description}
              </p>
            </div>
            
            <button
              onClick={handleNavigation}
              className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
                       text-slate-900 rounded-lg font-bold hover:from-cyan-400 hover:to-blue-400 
                       hover:scale-105 active:scale-95 font-mono tracking-wide
                       shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]
                       transition-all duration-300 border border-cyan-400/50"
            >
              <span className="relative z-10">{buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="services" 
      className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 overflow-hidden"
    >
      {/* Advanced AI Background */}
      <div className="absolute inset-0 w-full h-full">
        <AIServicesVisualization />
      </div>

      {/* Holographic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Scanline Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse top-1/6"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse top-2/6 animation-delay-1000"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse top-3/6 animation-delay-2000"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse top-4/6 animation-delay-3000"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse top-5/6 animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto py-20 px-6">
        <SectionHeader
          title="WHY CHOOSE DATASENSE"
          subtitle="The Smartest Path to Kickstart or Elevate Your Data Career"
          description="At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. Join thousands of learners who've transformed their careers — and this is just the beginning."
          isMain={true}
        />
        
        {/* AI Status Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 text-cyan-400/80 font-mono text-sm bg-slate-800/30 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30">
            <span>Neural Network Status: ACTIVE</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>AI Learning Modules: ONLINE</span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>Data Processing: OPTIMIZED</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 lg:px-8">
            <ServiceCard
              index={0}
              title="Learn Data Skills"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans powered by advanced AI algorithms"
              iconType="learn"
              gifSrc="/assets/gifs/1.gif" 
            />
            <ServiceCard
              index={1}
              title="Practice Real Time"
              description="Practice on our Interactive Coderpad, Go through everyday challenges, Create YOUR Own Quiz, Mock Quiz with real-time feedback"
              iconType="practice"
              gifSrc="/assets/gifs/17.gif"
            />
            <ServiceCard
              index={2}
              title="Play & Compete"
              description="Play and compete with your friends and colleges using our own Datasense Gaming Arena with AI-powered matchmaking"
              iconType="compete"
              gifSrc="/assets/gifs/18.gif"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto lg:px-8">
            <ServiceCard
              index={3}
              title="AI Integrated Services"
              description="Experience next-generation AI-powered learning with personalized curriculum adaptation and intelligent progress tracking"
              iconType="ai"
              gifSrc="/assets/gifs/20.gif"
            />
            <ServiceCard
              index={4}
              title="Expert Services"
              description="Connect with industry experts through our AI-enhanced mentorship platform for personalized career guidance and skill development"
              iconType="expert"
              gifSrc="/assets/gifs/23.gif"
            />
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <CeoMessage />
      </div>
    </section>
  );
};

export default ServicesMain;
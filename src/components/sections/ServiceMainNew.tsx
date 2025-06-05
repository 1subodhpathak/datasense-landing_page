import CeoMessage from "./CeoMessage";
import AnimatedIcon from "./AnimatedIcon";
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as THREE from 'three';

// AI Particle class for background (simplified version of Footer's)
class AIParticle extends THREE.Mesh {
  velocity: THREE.Vector3;
  targetPosition: THREE.Vector3;
  aiState: 'learning' | 'processing' | 'analyzing';

  constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[]) {
    super(geometry, material);
    this.velocity = new THREE.Vector3();
    this.targetPosition = new THREE.Vector3();
    this.aiState = 'learning';
  }
}

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

// Services AI Background Component
const ServicesAIBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameId = useRef<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    // Get section height dynamically
    const getSectionSize = () => {
      const el = mountRef.current;
      return {
        width: el ? el.clientWidth : window.innerWidth,
        height: el ? el.clientHeight : window.innerHeight
      };
    };
    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0f172a, 5, 30);
    const { width, height } = getSectionSize();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;
    // --- Footer-style Animations ---
    // Neural Nodes
    const neuralNodes: NeuralNode[] = [];
    const layers = 3;
    for (let layer = 0; layer < layers; layer++) {
      const nodesInLayer = Math.floor(6 - layer * 1.2);
      for (let node = 0; node < nodesInLayer; node++) {
        const geometry = new THREE.SphereGeometry(0.08, 8, 8);
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
    // Holographic Matrices
    const createHolographicMatrix = () => {
      const matrixGroup = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          const geometry = new THREE.PlaneGeometry(0.3, 0.3);
          const material = new THREE.MeshBasicMaterial({ 
            color: 0x00ffff,
            transparent: true,
            opacity: 0.1 + Math.random() * 0.3,
            side: THREE.DoubleSide
          });
          const plane = new THREE.Mesh(geometry, material);
          plane.position.set(i - 2.5, j - 2.5, 0);
          matrixGroup.add(plane);
        }
      }
      return matrixGroup;
    };
    const matrix1 = createHolographicMatrix();
    matrix1.position.set(-10, 0, -8);
    matrix1.rotation.y = Math.PI / 4;
    scene.add(matrix1);
    const matrix2 = createHolographicMatrix();
    matrix2.position.set(10, 0, -5);
    matrix2.rotation.y = -Math.PI / 4;
    scene.add(matrix2);
    // AI Particles
    const aiParticles: AIParticle[] = [];
    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(0.03, 1);
      const hue = (i / particleCount) * 0.3 + 0.4;
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL(hue, 1, 0.7),
        transparent: true,
        opacity: 0.8,
        emissive: new THREE.Color().setHSL(hue, 0.8, 0.1)
      });
      const particle = new AIParticle(geometry, material);
      particle.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      );
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );
      particle.targetPosition = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12
      );
      particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
      aiParticles.push(particle);
      scene.add(particle);
    }
    // Data Streams
    const createDataStream = (color: number, complexity: number) => {
      const points: THREE.Vector3[] = [];
      const segments = 80;
      for (let i = 0; i < segments; i++) {
        const t = i / segments;
        const x = Math.sin(t * Math.PI * complexity) * 6 + Math.cos(t * Math.PI * 2) * 1.5;
        const y = Math.cos(t * Math.PI * complexity * 0.7) * 3 + Math.sin(t * Math.PI * 3) * 0.8;
        const z = t * 15 - 7.5 + Math.sin(t * Math.PI * 4) * 1.5;
        points.push(new THREE.Vector3(x, y, z));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ 
        color,
        transparent: true,
        opacity: 0.4
      });
      return new THREE.Line(geometry, material);
    };
    const sqlStream = createDataStream(0x3b82f6, 3);
    const pythonStream = createDataStream(0x10b981, 4);
    const aiStream = createDataStream(0x8b5cf6, 5);
    scene.add(sqlStream);
    scene.add(pythonStream);
    scene.add(aiStream);
    // --- New Animations ---
    // Floating Data Packets
    const dataPackets: THREE.Mesh[] = [];
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08);
      const material = new THREE.MeshPhongMaterial({ color: 0x00fff7, emissive: 0x00fff7, opacity: 0.7, transparent: true });
      const packet = new THREE.Mesh(geometry, material);
      packet.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10
      );
      dataPackets.push(packet);
      scene.add(packet);
    }
    // Animated Grid (subtle wave)
    const gridGeometry = new THREE.PlaneGeometry(20, 20, 40, 40);
    const gridMaterial = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, opacity: 0.08, transparent: true });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.position.y = -3;
    gridMesh.rotation.x = -Math.PI / 2;
    scene.add(gridMesh);
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.8);
    directionalLight.position.set(8, 8, 5);
    scene.add(directionalLight);
    const pointLight1 = new THREE.PointLight(0xff0080, 0.6, 30);
    pointLight1.position.set(-8, 3, 8);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x0080ff, 0.6, 30);
    pointLight2.position.set(8, -3, -8);
    scene.add(pointLight2);
    camera.position.set(0, 1, 8);
    camera.lookAt(0, 0, 0);
    let time = 0;
    let lastTime = 0;
    // Animation Loop
    const animate = (): void => {
      if (!isVisible) {
        frameId.current = requestAnimationFrame(animate);
        return;
      }
      const now = performance.now();
      if (now - lastTime < 16) {
        frameId.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = now;
      time += 0.008;
      // Neural Network Pulsing
      neuralNodes.forEach((node: NeuralNode, index: number) => {
        node.activation = (Math.sin(time * 2 + index) + 1) / 2;
        const scale = 0.8 + node.activation * 0.6;
        node.scale.setScalar(scale);
        const material = node.material as THREE.MeshPhongMaterial;
        material.emissive.setHSL(0.5 + node.layer * 0.1, 0.5, node.activation * 0.3);
      });
      // Animate AI Particles
      aiParticles.forEach((particle: AIParticle, index: number) => {
        switch (particle.aiState) {
          case 'learning':
            particle.rotation.x += 0.015;
            particle.rotation.y += 0.008;
            break;
          case 'processing':
            particle.rotation.z += 0.02;
            const pulseScale = 1 + Math.sin(time * 3 + index) * 0.2;
            particle.scale.setScalar(pulseScale);
            break;
          case 'analyzing':
            particle.rotation.x += 0.008;
            particle.rotation.y += 0.015;
            particle.rotation.z += 0.008;
            break;
        }
        const direction = particle.targetPosition.clone().sub(particle.position);
        if (direction.length() < 0.3) {
          particle.targetPosition.set(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 12
          );
        }
        direction.normalize().multiplyScalar(0.008);
        particle.velocity.lerp(direction, 0.03);
        particle.position.add(particle.velocity);
        if (Math.random() < 0.0008) {
          particle.aiState = ['learning', 'processing', 'analyzing'][Math.floor(Math.random() * 3)] as 'learning' | 'processing' | 'analyzing';
        }
      });
      // Animate Data Streams
      sqlStream.rotation.y += 0.003;
      pythonStream.rotation.y -= 0.004;
      aiStream.rotation.x += 0.002;
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
        for (let j = i + 1; j < Math.min(i + 3, aiParticles.length); j++) {
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
      setTimeout(() => {
        connectionLines.forEach(line => scene.remove(line));
      }, 50);
      // Animate Data Packets
      dataPackets.forEach((packet, i) => {
        packet.position.x += Math.sin(time + i) * 0.002;
        packet.position.y += Math.cos(time + i) * 0.002;
        packet.rotation.x += 0.01;
        packet.rotation.y += 0.01;
      });
      // Animate Grid Wave
      const gridPos = gridGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < gridPos.length; i += 3) {
        gridPos[i + 2] = Math.sin(time + gridPos[i] * 0.5 + gridPos[i + 1] * 0.5) * 0.15;
      }
      gridGeometry.attributes.position.needsUpdate = true;
      // Camera movement
      camera.position.x = Math.sin(time * 0.1) * 1.5;
      camera.position.y = 1 + Math.cos(time * 0.08) * 0.8;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId.current = requestAnimationFrame(animate);
    };
    frameId.current = requestAnimationFrame(animate);
    setIsLoaded(true);
    // Handle visibility change
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    // Resize handler
    const handleResize = () => {
      if (rendererRef.current && mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        rendererRef.current.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    // Use ResizeObserver for more reliable resizing
    const resizeObserver = new window.ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);
    // Initial resize (in case the container is already sized)
    handleResize();
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (frameId.current !== null) {
        cancelAnimationFrame(frameId.current);
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
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <div ref={mountRef} className="absolute inset-0 w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="text-cyan-400 text-lg animate-pulse">Initializing Services...</div>
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
        <div className="relative mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wider">
            WHY CHOOSE DATASENSE
          </h1>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-4"></div>
          <div className="text-cyan-300/80 text-lg md:text-xl font-mono mb-6">Advanced Data Intelligence Platform</div>
        </div>
      ) : (
        <h2 className="text-4xl font-bold text-center text-cyan-100 mb-4">
          {title}
        </h2>
      )}
      
      <p className={`text-xl md:text-2xl text-center text-cyan-300 mb-4 mx-auto ${isMain ? 'md:text-3xl' : ''}`}>
        {subtitle}
      </p>
  
      <p className={`text-base md:text-lg text-center text-cyan-100/90 mb-16 mx-auto max-w-4xl leading-relaxed ${isMain ? 'md:text-xl' : ''}`}>
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

  // Card color schemes matching Footer design
  const cardSchemes = [
    { gradient: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/30 hover:border-cyan-400/60', accent: 'text-cyan-400', dot: 'bg-cyan-400' },
    { gradient: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-400/30 hover:border-purple-400/60', accent: 'text-purple-400', dot: 'bg-purple-400' },
    { gradient: 'from-green-500/20 to-teal-500/20', border: 'border-green-400/30 hover:border-green-400/60', accent: 'text-green-400', dot: 'bg-green-400' },
    { gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-400/30 hover:border-blue-400/60', accent: 'text-blue-400', dot: 'bg-blue-400' },
    { gradient: 'from-orange-500/20 to-red-500/20', border: 'border-orange-400/30 hover:border-orange-400/60', accent: 'text-orange-400', dot: 'bg-orange-400' }
  ];

  const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({ 
    title, 
    description, 
    iconType, 
    buttonText = "LEARN MORE",
    gifSrc,
    index
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const scheme = cardSchemes[index] || cardSchemes[0];

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
        className={`opacity-0 translate-y-12 animate-[fadeIn_0.6s_ease-out_forwards] 
                    [animation-delay:${index * 0.1}s] relative w-full max-w-sm mx-auto group`}
      >
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${scheme.gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10`}></div>
        
        {/* Book Container */}
        <div 
          className="book-container relative h-[400px] w-[320px] mx-auto 
                     transform-gpu preserve-3d flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Book Cover */}
          <div 
            className={`absolute inset-0 backdrop-blur-md bg-slate-800/40 
                       rounded-xl cursor-pointer border-2 ${scheme.border}
                       flex flex-col items-center justify-center gap-6 p-8
                       origin-left book-cover ${isHovered ? 'book-open' : ''}
                       transition-all duration-500`}
          >
            {/* Status Dot */}
            <div className={`absolute top-3 right-3 w-3 h-3 ${scheme.dot} rounded-full animate-pulse`}></div>
            
            {/* GIF/Icon Container */}
            <div className="book-content-front">
              <h3 className={`text-xl font-bold ${scheme.accent} text-center 
                           text-shadow-[0_0_4px_currentColor] tracking-wide mb-6 font-mono flex items-center justify-center`}>
                <span className={`w-2 h-2 ${scheme.dot} rounded-full mr-3 animate-ping`}></span>
                {title.toUpperCase()}
              </h3>
              
              {gifSrc ? (
                <div className="relative">
                  <img 
                    src={gifSrc} 
                    alt={title} 
                    className="w-48 h-48 object-contain rounded-lg border border-cyan-400/20" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
                </div>
              ) : (
                <div className={`${scheme.accent} scale-150 mb-4`}>
                  <AnimatedIcon type={iconType} />
                </div>
              )}
            </div>
          </div>

          {/* Book Content (Inside Pages) */}
          <div className="absolute inset-0 p-8 pl-16 flex flex-col items-center 
                        justify-between text-center book-content-back backdrop-blur-md bg-slate-800/60 rounded-xl">
            <div className="mt-12">
              <p className="text-cyan-300/90 text-sm leading-relaxed font-mono">
                {description}
              </p>
            </div>
            
            <button
              onClick={handleNavigation}
              className={`px-6 py-3 bg-gradient-to-r ${scheme.gradient} ${scheme.accent} rounded-lg 
                       font-semibold active:scale-95 font-mono
                       shadow-[0_0_15px_currentColor] transition-all duration-300
                       border border-current/30 hover:border-current/60`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-950 text-cyan-100 relative overflow-hidden min-h-screen">
      {/* Advanced AI Background */}
      <div className="absolute inset-0 w-full h-full">
        <ServicesAIBackground />
      </div>

      {/* Holographic Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Scanline Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse top-1/4"></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse top-2/4" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse top-3/4" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto py-20 px-6 relative z-10">
        <SectionHeader
          title="WHY CHOOSE DATASENSE"
          subtitle="The Smartest Path to Kickstart or Elevate Your Data Career"
          description="At DataSense, we equip aspiring and seasoned professionals with practical, in-demand Data & AI skills. Join thousands of learners who've transformed their careers — and this is just the beginning."
          isMain={true}
        />
        
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 lg:px-8">
            <ServiceCard
              index={0}
              title="Learn Data Skills"
              description="Build job-ready skills with award-winning courses and personalized, goal-oriented learning plans"
              iconType="learn"
              gifSrc="/assets/gifs/1.gif" 
            />
            <ServiceCard
              index={1}
              title="Practice Real Time"
              description="Practice on our Interactive Coderpad, Go through everyday challenges, Create YOUR Own Quiz, Mock Quiz"
              iconType="practice"
              gifSrc="/assets/gifs/17.gif"
            />
            <ServiceCard
              index={2}
              title="Play & Compete"
              description="Play and compete with your friends and colleges using our own Datasense Gaming Arena"
              iconType="compete"
              gifSrc="/assets/gifs/18.gif"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto lg:px-8">
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
      <CeoMessage />
    </section>
  );
};

export default ServicesMain;
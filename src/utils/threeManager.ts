//src/utils/threeManager.ts
import * as THREE from 'three';

export class ThreeManager {
  private static instance: ThreeManager;
  private contexts: Map<string, {
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    isActive: boolean
  }> = new Map();
  
  static getInstance() {
    if (!ThreeManager.instance) {
      ThreeManager.instance = new ThreeManager();
    }
    return ThreeManager.instance;
  }

  createContext(id: string, canvas: HTMLCanvasElement) {
    if (this.contexts.has(id)) return;
    
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump"
    });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    
    this.contexts.set(id, {
      renderer,
      scene,
      camera,
      isActive: true
    });

    return { renderer, scene, camera };
  }

  setContextActive(id: string, active: boolean) {
    const context = this.contexts.get(id);
    if (context) {
      context.isActive = active;
    }
  }

  disposeContext(id: string) {
    const context = this.contexts.get(id);
    if (context) {
      const { renderer, scene } = context;
      
      // Dispose all resources
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
      this.contexts.delete(id);
    }
  }
}
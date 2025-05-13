import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Text3D, Center, Environment, Sphere } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Mesh } from 'three'
// import { useSpring, animated } from '@react-spring/three'

// Animated Data Grid with Waves
const DataGrid = () => {
  const gridSize = 20 // Increased for fuller width
  const points = useMemo(() => {
    const temp = []
    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let z = -gridSize; z <= gridSize; z += 2) {
        temp.push({
          position: [x, -2, z],
          offset: Math.random() * Math.PI * 2
        })
      }
    }
    return temp
  }, [])

  useFrame(({ clock }) => {
    points.forEach((point) => {
      const x = point.position[0]
      const z = point.position[2]
      // Create wave effect
      point.position[1] = -2 + Math.sin(clock.elapsedTime * 0.5 + x * 0.5 + z * 0.5 + point.offset) * 0.5
    })
  })

  return (
    <group>
      {points.map((point, i) => (
        <Float
          key={i}
          speed={2}
          rotationIntensity={0}
          floatIntensity={0.2}
          position={point.position as [number, number, number]}
        >
          <Sphere args={[0.05, 8, 8]}>
            <meshStandardMaterial 
              color="#22d3ee" 
              emissive="#0891b2" 
              emissiveIntensity={0.5} 
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

// Interactive Logo Text
const LogoText = () => {
  const textRef = useRef<Mesh>(null)
  const { viewport } = useThree()
  
  // Simple glow animation
  const [glowIntensity, setGlowIntensity] = useState(0.5)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => prev === 0.5 ? 1.2 : 0.5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Responsive size calculation
  const textSize = useMemo(() => {
    return Math.min(viewport.width * 0.15, 3.5)
  }, [viewport.width])

  // Mouse follow animation
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0])
  useFrame(({ mouse }) => {
    const x = (mouse.x * Math.PI) / 20
    const y = (mouse.y * Math.PI) / 20
    setRotation([y, x, 0])
  })

  return (
    <mesh ref={textRef} rotation={rotation}>
      <Text3D
        font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
        size={textSize}
        height={0.2}
        curveSegments={16}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={8}
      >
        DATASENSE
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0891b2"
          emissiveIntensity={glowIntensity}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </mesh>
  )
}

const AnimatedLogo = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 20], fov: 45 }}
      style={{ height: '280px', width: '100%' }}
      dpr={[1, 2]} // Limit pixel ratio for better performance
    >
      <color attach="background" args={['#0f172a']} />
      <fog attach="fog" args={['#0f172a', 5, 30]} />
      
      {/* Simplified lighting setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#0891b2" />

      <group position={[0, 0, 0]}>
        <DataGrid />
        <Center position={[0, 4, 0]}>
          <LogoText />
        </Center>
      </group>

      <Environment preset="city" />
    </Canvas>
  )
}

export default AnimatedLogo
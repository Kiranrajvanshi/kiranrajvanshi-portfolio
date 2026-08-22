import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

function FloatingPolyhedrons({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle mouse parallax
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        mousePosition.x * 0.4,
        2,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -mousePosition.y * 0.3,
        2,
        delta
      );
    }

    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.3;
      ringRef1.current.rotation.y += delta * 0.4;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.25;
      ringRef2.current.rotation.z += delta * 0.35;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x += delta * 0.5;
      octaRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[1.5, 0, 0]}>
      {/* Central Holographic Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[0.9, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00f0ff"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.9}
            wireframe={true}
          />
        </Sphere>

        {/* Inner Solid Core */}
        <Sphere args={[0.45, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Orbiting Tech Ring 1 */}
      <Torus ref={ringRef1} args={[1.8, 0.02, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} />
      </Torus>

      {/* Orbiting Tech Ring 2 */}
      <Torus ref={ringRef2} args={[2.2, 0.015, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.4} />
      </Torus>

      {/* Floating Geometric Accent 1 */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Octahedron ref={octaRef} args={[0.35]} position={[-2, 1.6, -0.5]}>
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={0.6}
            wireframe={true}
          />
        </Octahedron>
      </Float>

      {/* Floating Geometric Accent 2 */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[1.8, -1.5, 0.5]}>
          <tetrahedronGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.5}
            wireframe={true}
          />
        </mesh>
      </Float>
    </group>
  );
}

function StarField({ count = 120 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 16;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f0ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface Hero3DCanvasProps {
  mousePosition: { x: number; y: number };
  isMobile?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ mousePosition, isMobile = false }) => {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#a855f7" />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />

        <StarField count={isMobile ? 60 : 150} />
        <FloatingPolyhedrons mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;

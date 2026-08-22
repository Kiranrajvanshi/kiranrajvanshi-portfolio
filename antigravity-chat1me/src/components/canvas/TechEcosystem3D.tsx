import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { TECH_NODES } from '../../data/portfolioData';

interface TechNodeProps {
  node: typeof TECH_NODES[0];
  position: [number, number, number];
  isSelected: boolean;
  onSelect: (name: string) => void;
}

function TechNode3D({ node, position, isSelected, onSelect }: TechNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={hovered || isSelected ? 1.4 : 1}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node.name);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[0.22]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={hovered || isSelected ? 1.2 : 0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* HTML Label attached to 3D node */}
      <Html distanceFactor={10} position={[0, -0.38, 0]} center className="pointer-events-none select-none">
        <div
          className={`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-all duration-200 ${
            hovered || isSelected
              ? 'bg-black/90 text-accent-cyan border border-accent-cyan/80 shadow-[0_0_12px_rgba(0,240,255,0.5)] scale-110'
              : 'bg-black/60 text-slate-300 border border-white/10'
          }`}
        >
          {node.name}
        </div>
      </Html>
    </group>
  );
}

function OrbitSystem({
  selectedNode,
  onSelectNode,
}: {
  selectedNode: string | null;
  onSelectNode: (name: string) => void;
}) {
  const orbitGroup = useRef<THREE.Group>(null);

  // Distribute nodes evenly along 2 spherical/elliptical orbital rings
  const nodePositions = useMemo(() => {
    return TECH_NODES.map((node, index) => {
      const ringIndex = index % 2;
      const totalInRing = TECH_NODES.length / 2;
      const indexInRing = Math.floor(index / 2);
      const angle = (indexInRing / totalInRing) * Math.PI * 2;
      const radius = ringIndex === 0 ? 2.5 : 3.4;
      const yOffset = ringIndex === 0 ? Math.sin(angle * 2) * 0.6 : Math.cos(angle * 2) * 0.8;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return { node, pos: [x, yOffset, z] as [number, number, number] };
    });
  }, []);

  useFrame((_, delta) => {
    if (orbitGroup.current) {
      orbitGroup.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={orbitGroup}>
      {/* Central Core: KIRAN */}
      <Float speed={2} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial
            color="#0b0f19"
            emissive="#00f0ff"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
        <Html distanceFactor={8} position={[0, 0, 0]} center className="pointer-events-none select-none">
          <div className="px-3 py-1.5 rounded-full bg-black/90 border border-accent-cyan/60 text-accent-cyan font-bold tracking-widest text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            KIRAN
          </div>
        </Html>
      </Float>

      {/* Orbit Track Rings */}
      <mesh rotation={[Math.PI / 6, 0, 0]}>
        <ringGeometry args={[2.48, 2.52, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 6, 0, 0]}>
        <ringGeometry args={[3.38, 3.42, 64]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>

      {/* Tech Nodes */}
      {nodePositions.map(({ node, pos }) => (
        <TechNode3D
          key={node.name}
          node={node}
          position={pos}
          isSelected={selectedNode === node.name}
          onSelect={onSelectNode}
        />
      ))}
    </group>
  );
}

interface TechEcosystem3DProps {
  selectedTech: string | null;
  onSelectTech: (name: string) => void;
}

export const TechEcosystem3D: React.FC<TechEcosystem3DProps> = ({ selectedTech, onSelectTech }) => {
  return (
    <div className="w-full h-[480px] relative rounded-2xl overflow-hidden glass-panel border border-white/10">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#a855f7" />

        <OrbitSystem selectedNode={selectedTech} onSelectNode={onSelectTech} />
      </Canvas>
    </div>
  );
};

export default TechEcosystem3D;

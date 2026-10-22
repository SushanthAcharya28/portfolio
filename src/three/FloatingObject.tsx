import { useRef, type MutableRefObject } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import type { Group } from 'three';

interface Props { pointer: MutableRefObject<{ x: number; y: number }>; animate: boolean; detail: number }

export default function FloatingObject({ pointer, animate, detail }: Props) {
  const group = useRef<Group>(null);
  const rings = useRef<Group>(null);

  useFrame((state, dt) => {
    if (!animate || !group.current || !rings.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y += dt * 0.12;
    group.current.rotation.x += (pointer.current.y * 0.35 - group.current.rotation.x) * Math.min(1, dt * 2);
    group.current.position.x += (pointer.current.x * 0.25 - group.current.position.x) * Math.min(1, dt * 2);
    group.current.position.y = Math.sin(t * 0.6) * 0.08;
    rings.current.rotation.z = t * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, detail]} />
        <MeshDistortMaterial color="#c9c2ff" metalness={1} roughness={0.18} distort={animate ? 0.28 : 0} speed={animate ? 1.1 : 0} />
      </mesh>
      <group ref={rings} rotation={[1.2, 0.3, 0]}>
        <mesh>
          <torusGeometry args={[2, 0.008, 8, 128]} />
          <meshStandardMaterial color="#9B8AFF" emissive="#9B8AFF" emissiveIntensity={0.6} />
        </mesh>
        <mesh rotation={[0.5, 0.2, 0]}>
          <torusGeometry args={[2.5, 0.005, 8, 128]} />
          <meshStandardMaterial color="#F5F5F2" transparent opacity={0.5} />
        </mesh>
      </group>
    </group>
  );
}

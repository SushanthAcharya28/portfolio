import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import FloatingObject from './FloatingObject';
import Particles from './Particles';
import { useReducedMotion } from '../hooks/useReducedMotion';

// Default export so the scene can be lazy-loaded.
export default function Scene() {
  const reduced = useReducedMotion();
  const pointer = useRef({ x: 0, y: 0 });
  const mobile = window.matchMedia('(max-width: 767px)').matches;

  useEffect(() => {
    if (reduced || mobile) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced, mobile]);

  return (
    <Canvas
      // pointer-events none: the canvas never blocks links, buttons or scrolling
      style={{ pointerEvents: 'none' }}
      frameloop={reduced ? 'demand' : 'always'}
      dpr={mobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: !mobile, powerPreference: 'high-performance' }}
      aria-hidden
    >
      <Suspense fallback={null}>
        {/* Self-contained studio lighting: no HDR file downloaded */}
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={4} position={[0, 5, -3]} scale={[10, 3, 1]} />
          <Lightformer form="rect" intensity={2.5} position={[-5, 1, 2]} scale={[3, 6, 1]} color="#9B8AFF" />
          <Lightformer form="rect" intensity={2} position={[5, -1, 2]} scale={[3, 6, 1]} />
        </Environment>
        <FloatingObject pointer={pointer} animate={!reduced} detail={mobile ? 3 : 5} />
        <Particles count={mobile ? 60 : 160} animate={!reduced} />
      </Suspense>
    </Canvas>
  );
}

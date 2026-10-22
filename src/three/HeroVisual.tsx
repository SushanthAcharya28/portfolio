import { Component, lazy, Suspense, useMemo, type ReactNode } from 'react';
import { Box, Skeleton } from '@mui/material';

const Scene = lazy(() => import('./Scene'));

function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/** Static, WebGL-free stand-in: a CSS sphere with a ring. */
function StaticFallback() {
  return (
    <Box role="img" aria-label="Abstract metallic sphere" sx={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center' }}>
      <Box sx={{ width: '55%', aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle at 32% 28%, #f5f5f2, #9B8AFF 35%, #1a1830 75%)', boxShadow: '0 0 0 1px rgba(255,255,255,.12)' }} />
    </Box>
  );
}

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <StaticFallback /> : this.props.children; }
}

export default function HeroVisual() {
  const webgl = useMemo(hasWebGL, []);
  if (!webgl) return <StaticFallback />;
  return (
    <Boundary>
      <Suspense fallback={<Skeleton variant="circular" sx={{ width: '55%', aspectRatio: '1', m: 'auto', bgcolor: 'rgba(255,255,255,.05)' }} />}>
        <Scene />
      </Suspense>
    </Boundary>
  );
}

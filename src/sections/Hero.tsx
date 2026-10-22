import { Box, Button, Container, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroVisual from '../three/HeroVisual';
import { profile } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reduced = useReducedMotion();
  // One coordinated page-load sequence: each item staggers in by 0.1s.
  const item = (i: number) => reduced ? {} : {
    initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <Box component="section" id="top" aria-labelledby="hero-title" sx={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', pt: 10, pb: 8 }}>
      {/* 3D layer sits behind the copy on mobile and to the right on desktop */}
      <Box aria-hidden sx={{ position: 'absolute', zIndex: 0, inset: { xs: '64px 0 auto 0', md: '0 0 0 40%' }, height: { xs: '48vh', md: 'auto' }, opacity: { xs: 0.55, md: 1 } }}>
        <HeroVisual />
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: 720 }, mt: { xs: '30vh', md: 0 } }}>
          <motion.div {...item(0)}><Typography variant="overline" color="primary">{profile.eyebrow}</Typography></motion.div>
          <motion.div {...item(1)}><Typography id="hero-title" component="h1" variant="h1" sx={{ mt: 2 }}>{profile.headline}</Typography></motion.div>
          <motion.div {...item(2)}><Typography color="text.secondary" sx={{ mt: 3, maxWidth: 520 }}>{profile.intro}</Typography></motion.div>
          <motion.div {...item(3)}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 5 }}>
              <Button variant="contained" color="primary" href="#projects" sx={{ '&:active': { transform: 'scale(.97)' } }}>Explore my work</Button>
              <Button variant="outlined" href="#contact" sx={{ '&:active': { transform: 'scale(.97)' } }}>Get in touch</Button>
            </Box>
          </motion.div>
          <motion.div {...item(4)}>
            <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
              {profile.socials.map((s) => (
                <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" color="text.secondary" sx={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', '&:hover': { color: 'text.primary' } }}>{s.label}</Link>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      <Link href="#about" aria-label="Scroll to About" color="text.secondary" sx={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: { xs: 'none', md: 'block' } }}>
        <ChevronDown aria-hidden />
      </Link>
    </Box>
  );
}

import { useEffect, useState } from 'react';
import { AppBar, Box, Container, Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import { colors } from '../app/theme';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(11,11,13,.6)', borderBottom: `1px solid ${colors.line}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
          <Link href="#top" aria-label={`${profile.name}, back to top`} color="text.primary" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            {profile.monogram}
          </Link>

          <Box component="nav" aria-label="Primary" sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            {links.map((l) => (
              <Link key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}
                sx={{ color: active === l.id ? 'text.primary' : 'text.secondary', py: 1, position: 'relative', transition: 'color .2s', '&:hover': { color: 'text.primary' },
                  '&::after': { content: '""', position: 'absolute', left: 0, right: 0, bottom: 0, height: 1, bgcolor: 'primary.main', transform: active === l.id ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform .25s' } }}>
                {l.label}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
              <Box aria-hidden sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#5BD68A' }} />
              <Typography variant="body2" color="text.secondary">{profile.availability}</Typography>
            </Box>
            <IconButton sx={{ display: { md: 'none' } }} aria-label="Open menu" onClick={() => setOpen(true)}><Menu /></IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} PaperProps={{ sx: { width: 'min(320px, 85vw)', p: 3, bgcolor: 'background.default' } }}>
        <IconButton aria-label="Close menu" onClick={() => setOpen(false)} sx={{ alignSelf: 'flex-end' }}><X /></IconButton>
        <Box component="nav" aria-label="Mobile" sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 4 }}>
          {links.map((l) => (
            <Link key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} color="text.primary" sx={{ fontSize: '1.6rem', fontWeight: 600, py: 1.5 }}>
              {l.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
}

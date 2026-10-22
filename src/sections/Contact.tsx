import { Box, Button, Container, Link, Typography } from '@mui/material';
import { Mail } from 'lucide-react';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <Box component="section" id="contact" aria-labelledby="contact-title" sx={{ py: { xs: 12, md: 20 } }}>
      <Container maxWidth="xl">
        <Reveal>
          <Typography id="contact-title" component="h2" variant="h1" sx={{ maxWidth: 900 }}>Have something interesting in mind?</Typography>
          <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 480 }}>I take on a few projects a year. Tell me what you are making and where you need help.</Typography>
          <Button variant="contained" color="primary" size="large" href={`mailto:${profile.email}`} startIcon={<Mail size={18} aria-hidden />} sx={{ mt: 5 }}>
            {profile.email}
          </Button>
          <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
            {profile.socials.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" color="text.secondary" sx={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', '&:hover': { color: 'text.primary' } }}>{s.label}</Link>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}

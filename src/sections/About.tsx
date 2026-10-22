import { Box, Container, Typography } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

export default function About() {
  return (
    <Box component="section" id="about" aria-labelledby="about-title" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Reveal><SectionHeading id="about">Design thinking, engineering discipline.</SectionHeading></Reveal>
        <Box sx={{ display: 'grid', gap: { xs: 5, md: 10 }, gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' } }}>
          <Reveal>
            <Box sx={{ maxWidth: 560, display: 'grid', gap: 3 }}>
              {profile.bio.map((p) => <Typography key={p} color="text.secondary">{p}</Typography>)}
            </Box>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography variant="overline" color="text.secondary">Interests</Typography>
            <Typography sx={{ mt: 1, mb: 4 }}>{profile.interests.join(', ')}</Typography>
            <Typography variant="overline" color="text.secondary">Skills</Typography>
            <Typography sx={{ mt: 1 }}>{profile.skills.join(', ')}</Typography>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

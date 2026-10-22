import { Box, Container, Typography } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { experience } from '../data/profile';
import { colors } from '../app/theme';

export default function Experience() {
  return (
    <Box component="section" id="experience" aria-labelledby="experience-title" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Reveal><SectionHeading id="experience">Experience and education</SectionHeading></Reveal>
        <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
          {experience.map((e) => (
            <Box component="li" key={e.role + e.org} sx={{ display: 'grid', gap: { xs: 1, md: 6 }, gridTemplateColumns: { xs: '1fr', md: '3fr 9fr' }, py: 4, borderTop: `1px solid ${colors.line}` }}>
              <Typography color="text.secondary">{e.range}</Typography>
              <Box>
                <Typography component="h3" variant="h3">{e.role}, {e.org}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 560 }}>{e.description}</Typography>
                <Typography variant="body2" sx={{ mt: 1.5 }} color="primary">{e.tags.join(', ')}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

import { Box, Container } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projects } from '../data/profile';

export default function Projects() {
  return (
    <Box component="section" id="projects" aria-labelledby="projects-title" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Reveal><SectionHeading id="projects">Selected projects</SectionHeading></Reveal>
        <Box sx={{ display: 'grid', gap: { xs: 7, md: 10 }, columnGap: { md: 8 }, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
          {projects.map((p, i) => (
            <Box key={p.title} sx={{ mt: { md: i % 2 ? 10 : 0 } }}>
              <Reveal><ProjectCard project={p} /></Reveal>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

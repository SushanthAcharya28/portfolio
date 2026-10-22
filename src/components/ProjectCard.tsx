import { Box, Link, Typography } from '@mui/material';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/profile';
import { colors } from '../app/theme';

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Box component="article" sx={{ '&:hover .thumb': { transform: 'scale(1.04)' } }}>
      <Box sx={{ overflow: 'hidden', borderRadius: 2, border: `1px solid ${colors.line}`, aspectRatio: '16 / 10' }}>
        {/* Placeholder thumbnail: replace with <img src alt width height loading="lazy" /> */}
        <Box className="thumb" role="img" aria-label={`${p.title} preview`}
          sx={{ width: '100%', height: '100%', transition: 'transform .6s cubic-bezier(.22,1,.36,1)', background: `radial-gradient(circle at 30% 25%, hsl(${p.hue} 80% 70% / .9), hsl(${p.hue} 40% 14%) 60%), #0B0B0D` }} />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mt: 2.5 }}>
        <Typography component="h3" variant="h3">{p.title}</Typography>
        <Typography variant="body2" color="text.secondary">{p.year}, {p.category}</Typography>
      </Box>
      <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 480 }}>{p.description}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>{p.role}: {p.stack.join(', ')}</Typography>
      <Box sx={{ display: 'flex', gap: 3, mt: 1.5 }}>
        {p.demo && <Link href={p.demo} target="_blank" rel="noopener noreferrer" color="primary" sx={{ display: 'inline-flex', alignItems: 'center', gap: .5, minHeight: 44 }}>Live demo <ArrowUpRight size={16} aria-hidden /></Link>}
        {p.repo && <Link href={p.repo} target="_blank" rel="noopener noreferrer" color="text.secondary" sx={{ display: 'inline-flex', alignItems: 'center', gap: .5, minHeight: 44 }}><Github size={16} aria-hidden /> Source</Link>}
      </Box>
    </Box>
  );
}

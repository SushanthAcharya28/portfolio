import { Typography } from '@mui/material';

export default function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <Typography id={`${id}-title`} component="h2" variant="h2" sx={{ mb: { xs: 5, md: 8 }, maxWidth: 720 }}>
      {children}
    </Typography>
  );
}

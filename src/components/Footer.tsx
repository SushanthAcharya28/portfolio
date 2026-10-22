import { Box, Container, Typography } from '@mui/material';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid rgba(255,255,255,.1)' }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} {profile.name}</Typography>
      </Container>
    </Box>
  );
}

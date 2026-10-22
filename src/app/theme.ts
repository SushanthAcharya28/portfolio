import { createTheme } from '@mui/material/styles';

export const colors = {
  bg: '#0B0B0D',
  text: '#F5F5F2',
  muted: '#A1A1AA',
  accent: '#9B8AFF',
  surface: 'rgba(255,255,255,0.04)',
  line: 'rgba(255,255,255,0.1)',
};

const font = '"Inter Variable", Inter, system-ui, sans-serif';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: colors.bg, paper: '#141417' },
    text: { primary: colors.text, secondary: colors.muted },
    primary: { main: colors.accent, contrastText: colors.bg },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: font,
    h1: { fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.04, fontSize: 'clamp(2.4rem, 7vw, 5.2rem)' },
    h2: { fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)' },
    h3: { fontWeight: 600, letterSpacing: '-0.02em', fontSize: '1.35rem' },
    body1: { lineHeight: 1.7, fontSize: '1.05rem' },
    body2: { lineHeight: 1.65 },
    overline: { letterSpacing: '0.14em', fontSize: '0.72rem', fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: colors.bg } } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, padding: '12px 26px', minHeight: 48, transition: 'transform .2s, background-color .2s' },
        outlined: { borderColor: colors.line, color: colors.text, '&:hover': { borderColor: colors.accent, backgroundColor: colors.surface } },
        containedPrimary: { '&:hover': { backgroundColor: '#B3A6FF' } },
      },
    },
    MuiLink: { defaultProps: { underline: 'none' } },
  },
});

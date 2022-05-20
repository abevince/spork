import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#78722a',
    },
    secondary: {
      main: '#f1f',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: '36px',
      letterSpacing: '2%',
      fontWeight: 'normal',
      padding: '25px 0',
    },
    h2: {
      fontSize: 24,
      lineHeight: '28px',
      letterSpacing: '2%',
      fontWeight: 'normal',
      padding: '25px 0',
    },
    h3: {
      fontSize: 20,
      lineHeight: '24px',
      letterSpacing: '2%',
    },
    h4: {
      fontSize: 18,
      lineHeight: '20px',
      letterSpacing: '2%',
      padding: '16px 0',
    },
    body1: {
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '2%',
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '2%',
    },
    caption: {
      fontSize: 12,
      lineHeight: '14px',
      letterSpacing: '2%',
    },
  },
});

export default theme;

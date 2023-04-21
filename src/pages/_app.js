import '@/styles/globals.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const basicTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ basicTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

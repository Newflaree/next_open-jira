import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@/themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

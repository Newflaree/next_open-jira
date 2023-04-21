import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Typography>Hello World</Typography>
  );
}

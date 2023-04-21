import { Inter } from 'next/font/google';
import { Typography } from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <Typography variant='h1' color='primary'>Hello World</Typography>
    </MainLayout>
  );
}

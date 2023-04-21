import Head from 'next/head';
import { Box } from '@mui/material';
import {NavBar} from '../ui';

export const MainLayout = ({ title = 'OpenJira', children }) => {
  return (
    <Box 
      sx={{
        flexFlow: 1
      }}
    >
      <Head>
        <title>{ title }</title>
      </Head>

      <NavBar />
      { /* Sidebar */ }

      <Box
        sx={{
          padding: '10px 20px'
        }}
      >
        { children }
      </Box>
    </Box>
  );
}

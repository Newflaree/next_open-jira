import { Inter } from 'next/font/google';
// Material UI
import {
  Card,
  CardContent,
  CardHeader,
  Grid
} from '@mui/material';
// Layouts
import { MainLayout } from '@/components/layouts';
import {EntryList, NewEntry} from '@/components/ui';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout title='Home - OpenJira'>
      <Grid
        container
        spacing={ 2 }
      >
        { /* GridItem */ }
        <Grid
          item
          xs={ 12 }
          sm={ 4 }
        >
          <Card
            sx={{
              height: 'calc( 100vh - 100px )'
            }}
          >
            <CardHeader title='Pendientes' />

            <NewEntry />
            <EntryList status='pending' />
          </Card>
        </Grid>
        { /* GridItem */ }
        { /* GridItem */ }
        <Grid
          item
          xs={ 12 }
          sm={ 4 }
        >
          <Card
            sx={{
              height: 'calc( 100vh - 100px )'
            }}
          >
            <CardHeader title='En Progreso' />

            <EntryList status='in-progress' />
          </Card>
        </Grid>
        { /* GridItem */ }
        { /* GridItem */ }
        <Grid
          item
          xs={ 12 }
          sm={ 4 }
        >
          <Card
            sx={{
              height: 'calc( 100vh - 100px )'
            }}
          >
            <CardHeader title='Terminadas' />

            <EntryList status='finished' />
          </Card>
        </Grid>
        { /* GridItem */ }
      </Grid>
    </MainLayout>
  );
}

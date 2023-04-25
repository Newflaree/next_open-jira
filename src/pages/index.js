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

            <CardContent>
              { /* Agregar una nueva entrada */ }
              { /* Listado de las entradas */ }
            </CardContent>
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
          </Card>
        </Grid>
        { /* GridItem */ }
      </Grid>
    </MainLayout>
  );
}

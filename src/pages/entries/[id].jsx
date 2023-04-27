// Material UI
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@mui/material';
// Material Icons
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
// Layouts
import { MainLayout } from '@/components/layouts';

const EntryPage = () => {
  return (
    <MainLayout title='... ....'>
      <Grid
        container
        justifyContent='center'
        sx={{
          marginTop: 2
        }}
      >
        <Grid
          item
          xs={ 12 }
          sm={ 8 }
          md={ 6 }
        >
          <Card>
            <CardHeader
              title='Entrada:' 
              subheader={ `Creada hace: ... minutos` }
            />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder='Actualizar entrada'
                  label='Actualizar entrada'
                  autoFocus
                  multiline
                  sx={{
                    marginTop: 2,
                    marginBottom: 1
                  }}
                />

                { /* Radio */ }

                <CardActions>
                  <Button
                    startIcon={ <SaveOutlinedIcon /> }
                    variant='contained'
                    fullWidth
                  >
                      Save
                  </Button>
                </CardActions>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default EntryPage;

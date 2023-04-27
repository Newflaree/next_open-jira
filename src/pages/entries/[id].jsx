// Material UI
import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
// Material Icons
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
// Layouts
import { MainLayout } from '@/components/layouts';


const validStatus = [ 'pending', 'in-progress', 'finished' ];

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

                <FormControl>Estado: </FormControl>

                <RadioGroup row>
                  {
                    validStatus.map( option => (
                      <FormControlLabel 
                        key={ option }
                        value={ option }
                        control={ <Radio /> }
                        label={ capitalize( option ) }
                      />
                    )) 
                  }
                </RadioGroup>

                { /* Radio */ }
              </CardContent>

              <CardActions>
                <Button
                  startIcon={ <SaveOutlinedIcon /> }
                  variant='contained'
                  fullWidth
                >
                    Save
                </Button>
              </CardActions>
          </Card>
        </Grid>
      </Grid>
      
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark'
        }}
      >
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </MainLayout>
  );
}

export default EntryPage;

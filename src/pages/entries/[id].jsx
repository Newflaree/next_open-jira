// React
import { useState } from 'react';
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
  const [ inputValue, setInputValue ] = useState( '' );
  const [ status, setStatus ] = useState( 'pending' );
  const [ touched, setTouced ] = useState( false );

  const onInputValueChanged = ( event ) => {
    setInputValue( event.target.value );
  }

  const onStatusChanged = ( event ) => {
    setStatus( event.target.value );
  }

  const onSave = () => {
    console.log({ inputValue, status });
  }

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
              title={ `Entrada: ${ inputValue }` }
              subheader={ `Creada hace: ... minutos` }
            />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder='Actualizar entrada'
                  label='Actualizar entrada'
                  value={ inputValue }
                  onChange={ onInputValueChanged }
                  autoFocus
                  multiline
                  sx={{
                    marginTop: 2,
                    marginBottom: 1
                  }}
                />

                <FormControl>Estado: </FormControl>

                <RadioGroup
                  row
                  value={ status }
                  onChange={ onStatusChanged }
                >
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
                  onClick={ onSave }
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

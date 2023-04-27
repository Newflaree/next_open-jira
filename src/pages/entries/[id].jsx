// React
import { useMemo, useState } from 'react';
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
import { isValidObjectId } from 'mongoose';
import {dbEntries} from '@/database';


const validStatus = [ 'pending', 'in-progress', 'finished' ];

const EntryPage = ( props ) => {
  console.log({ props });
  const [ inputValue, setInputValue ] = useState( '' );
  const [ status, setStatus ] = useState( 'pending' );
  const [ touched, setTouced ] = useState( false );

  const isNotValid = useMemo( () => {
    return inputValue.length <= 0 && touched;
  } , [ inputValue, touched ] );

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
                  onBlur={ () => setTouced( true ) }
                  value={ inputValue }
                  helperText={ isNotValid && 'Ingrese un valor' }
                  onChange={ onInputValueChanged }
                  error={ isNotValid }
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
                  disabled={ inputValue.length <= 0 }
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

/* ========================
 *          Server
 * ========================*/
export const getServerSideProps = async ({ params }) => {
  const { id } = params;

  const entry = await dbEntries.getEntryById( id );
  
  if ( !entry ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      entry
    }
  }
}


export default EntryPage;

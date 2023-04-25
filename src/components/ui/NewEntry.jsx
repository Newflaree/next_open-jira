import { useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';

export const NewEntry = () => {

  const [ isAdding, setIsAdding ] = useState( false );
  const [ inputValue, setInputValue ] = useState( '' );
  const [ touched, setTouched ] = useState( false );

  const { addNewEntry } = useContext( EntriesContext )

  const onTextFieldChanges = ( event ) => {
    setInputValue( event.target.value );
  }

  const onSave = () => {
    if ( inputValue.length === 0 ) return;

    addNewEntry( inputValue );
    setIsAdding( false );
    setTouched( false );
    setInputValue( '' );
  }

  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1
      }}
    >
      {
        isAdding
          ? (
            <>
              <TextField 
                fullWidth
                sx={{
                  marginTop: 2,
                  marginBottom: 1
                }}
                placeholder='Nueva entrada'
                label='Nueva entrada'
                multiline
                autoFocus
                helperText={ inputValue.length <= 0 && touched && 'Ingrese un valor' }
                error={ inputValue.length <= 0 && touched }
                value={ inputValue }
                onChange={ onTextFieldChanges }
                onBlur={ () => setTouched( true ) }
              />

              <Box
                display='flex'
                justifyContent='space-between'
              >
                <Button
                  variant='text'
                  onClick={ () => setIsAdding( false ) }
                >
                  Cancelar
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={ <SaveOutlinedIcon /> }
                  onClick={ onSave }
                >
                  Guardar
                </Button>
              </Box>
            </>
          )
          : (
            <>
              <Button
                fullWidth
                startIcon={ <AddCircleOutlineOutlinedIcon /> }
                variant='outlined'
                onClick={ () => setIsAdding( true ) }
              >
                Agregar tarea
              </Button>
            </>
          )
      }
    </Box>
  );
}

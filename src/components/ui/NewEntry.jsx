import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry = () => {
  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1
      }}
    >
      <Button
        fullWidth
        startIcon={ <AddCircleOutlineOutlinedIcon /> }
        variant='outlined'
      >
        Agregar tarea
      </Button>

      <TextField 
        fullWidth
        sx={{
          marginTop: 2,
          marginBottom: 1
        }}
        placeholder='Nueva entrada'
        label='Nueva entrada'
        multiline
        helperText='Ingrese un valor'
      />

      <Box
        display='flex'
        justifyContent='space-between'
      >
        <Button
          variant='text'
        >
            Cancelar
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          endIcon={ <SaveOutlinedIcon /> }
        >
          Guardar
        </Button>
      </Box>
    </Box>
  );
}

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';


export const EntryListItem = ({ entry }) => {
  const onDragStart = ( event ) => {
    event.dataTransfer.setData( 'text', entry._id );
    // TODO: Modificar el estado para indeicar que estoy haciendo drag
  }

  const onDragEnd = () => {
    // TODO: Cancelar onDrag
  }

  return (
    <Card
      draggable
      onDragStart={ onDragStart }
      sx={{
        marginBottom: 1
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            sx={{
              whiteSpace: 'pre-line'
            }}
          >
            { entry.description }
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 2
          }}
        >
          <Typography variant='body2'>
            hace 30 minutos
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

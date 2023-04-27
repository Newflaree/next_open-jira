// React
import { useContext } from 'react';
// Next.js
import {useRouter} from 'next/router';
// Material UI
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';
// Context
import { UIContext } from '@/context/ui';
// Utils
import { dateFuncions } from '@/utils';


export const EntryListItem = ({ entry }) => {

  const { startDragging, endDragging } = useContext( UIContext );
  const router = useRouter();

  const onDragStart = ( event ) => {
    event.dataTransfer.setData( 'text', entry._id );
    startDragging();
  }

  const onDragEnd = () => {
    endDragging();
  }

  const onClick = () => {
    router.push( `/entries/${ entry._id }` );
  }

  return (
    <Card
      onClick={ onClick }
      draggable
      onDragStart={ onDragStart }
      onDragEnd={ onDragEnd }
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
            { dateFuncions.getFormatDistanceToNow( entry.createdAt ) }
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

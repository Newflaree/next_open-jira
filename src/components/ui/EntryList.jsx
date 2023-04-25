import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntriesContext } from '@/context/entries';
import { EntryListItem } from './';


export const EntryList = ({ status }) => {
  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ] );

  const allowDrop = ( event ) => {
    event.preventDefault();
  }

  const onDropEntry = ( event ) => {
    const id = event.dataTransfer.getData( 'text' );
  }
    

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
    >
      <Paper
        sx={{
          height: 'calc( 100vh - 180px )',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '1px 3px'
        }}
      >
        <List
          sx={{
            opacity: 1
          }}
        >
          {
            entriesByStatus.map( entry => (
              <EntryListItem key={ entry._id } entry={ entry } />
            ))
          }
        </List>
      </Paper>
    </div>
  );
}

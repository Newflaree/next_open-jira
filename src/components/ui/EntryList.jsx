import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
// Context
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';
// Components
import { EntryListItem } from './';
// Styles
import styles from './EntryList.module.css';


export const EntryList = ({ status }) => {
  const { entries, updateEntry } = useContext( EntriesContext );
  const { isDragging, endDragging } = useContext( UIContext );

  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status ), [ entries ] );

  const allowDrop = ( event ) => {
    event.preventDefault();
  }

  const onDropEntry = ( event ) => {
    const id = event.dataTransfer.getData( 'text' );
    const entry = entries.find( entry => entry._id === id );

    if ( !entry ) return;

    entry.status = status;

    updateEntry( entry );
    endDragging();
  }
    

  return (
    <div
      onDrop={ onDropEntry }
      onDragOver={ allowDrop }
      className={ isDragging ? styles.dragging : '' }
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
            opacity: isDragging ? 0.2 : 1,
            transition: 'all .3s'
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

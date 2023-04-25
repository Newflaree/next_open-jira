import { List, Paper } from '@mui/material';
import {EntryListItem} from '.';

export const EntryList = () => {
  return (
    <div>
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
          <EntryListItem />
          <EntryListItem />
          <EntryListItem />
        </List>
      </Paper>
    </div>
  );
}

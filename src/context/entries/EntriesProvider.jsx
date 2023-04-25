import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';


const ENTRIES_INITIAL_STATE = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'pending',
      createAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'in-progress',
      createAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'finished',
      createAt: Date.now() - 100000
    }
  ]
}

export const EntriesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );

  return (
    <EntriesContext.Provider
      value={{
        ...state
      }}
    >
      { children }
    </EntriesContext.Provider>
  );
}

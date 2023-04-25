import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';



const ENTRIES_INITIAL_STATE = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendientes: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'pending',
      createAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'En progreso: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'in-progress',
      createAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'Terminadas: Lorem jaksdfj m j masd ljdk ja j jals',
      status: 'finished',
      createAt: Date.now() - 100000
    }
  ]
}

export const EntriesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );

  const addNewEntry = ( description = '' ) => {
    const newEntry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[ENTRY] Add-Entry', payload: newEntry });
  }

  const updateEntry = ( entry ) => {
    dispatch({ type: '[ENTRY] Entry-Updated', payload: entry });
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        // Methods
        addNewEntry,
        updateEntry
      }}
    >
      { children }
    </EntriesContext.Provider>
  );
}

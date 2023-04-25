import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';



const ENTRIES_INITIAL_STATE = {
  entries: []
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

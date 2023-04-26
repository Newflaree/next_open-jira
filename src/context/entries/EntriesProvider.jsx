import { useEffect, useReducer } from 'react';
import { entriesApi } from '../../../apis';

import { EntriesContext, entriesReducer } from './';



const ENTRIES_INITIAL_STATE = {
  entries: []
}

export const EntriesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );

  const addNewEntry = async ( description = '' ) => {
    const { data } = await entriesApi.post( '/entries', { description } );
    dispatch({ type: '[ENTRY] Add-Entry', payload: data.newEntry });
  }

  const updateEntry = ( entry ) => {
    dispatch({ type: '[ENTRY] Entry-Updated', payload: entry });
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get( '/entries' );
    dispatch({ type: '[ENTRY] Refresh-Data', payload: data.entries });
  }

  useEffect(() => {
    refreshEntries();
  }, []);

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

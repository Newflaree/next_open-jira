import {useSnackbar} from 'notistack';
import { useEffect, useReducer } from 'react';
import { entriesApi } from '../../../apis';

import { EntriesContext, entriesReducer } from './';



const ENTRIES_INITIAL_STATE = {
  entries: []
}

export const EntriesProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async ( description = '' ) => {
    const { data } = await entriesApi.post( '/entries', { description } );
    dispatch({ type: '[ENTRY] Add-Entry', payload: data.newEntry });
  }

  const updateEntry = async ( { _id, description, status }, showSanckbar = false ) => {
    try {
      const { data } = await entriesApi.put(
        `/entries/${ _id }`,
        {
          description: description,
          status: status
        } 
      );

      if ( showSanckbar ) {
        enqueueSnackbar( 'Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });
      }

      dispatch({ type: '[ENTRY] Entry-Updated', payload: data.entryUpdated });
    } catch ( error ) {
      console.log( `${ '[ETRIES-PROVIDER.UPDATE-ENTRY]' }: ${ error }` );
    }
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

import { useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';


const ENTRIES_INITIAL_STATE = {
  entries: []
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

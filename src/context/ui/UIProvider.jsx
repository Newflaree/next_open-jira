import { useReducer } from 'react';
// Context
import { UIContext } from './UIContext';
// Reducer
import { UIReducer } from './UIReducer';


const UI_INITIAL_STATE = {
  sidemenuOpen: false
}

export const UIProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( UIReducer, UI_INITIAL_STATE );

  return (
    <UIContext.Provider
      value={{
        sidemenuOpen: false
      }}
    >
      { children }
    </UIContext.Provider>
  );
}

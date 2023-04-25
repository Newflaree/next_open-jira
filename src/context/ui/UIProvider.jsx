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

  const openSideMenu = () => dispatch( 'UI-OpenSidebar');
  const closeSideMenu = () => dispatch( 'UI-CloseSidebar' );

  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        openSideMenu,
        closeSideMenu
      }}
    >
      { children }
    </UIContext.Provider>
  );
}

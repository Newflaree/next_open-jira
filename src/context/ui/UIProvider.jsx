import { useReducer } from 'react';
import { UIContext, uiReducer } from './';


const UI_INITIAL_STATE = {
  sidemenuOpen: false
}

export const UIProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

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

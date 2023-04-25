import { useReducer } from 'react';
import { UIContext, uiReducer } from './';


const UI_INITIAL_STATE = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false
}

export const UIProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer( uiReducer, UI_INITIAL_STATE );

  const openSideMenu = () => dispatch({ type: 'UI-OpenSidebar' });
  const closeSideMenu = () => dispatch({ type: 'UI-CloseSidebar' });
  const startDragging = () => dispatch({ type: 'UI-StartDragging' });
  const endDragging = () => dispatch({ type: 'UI-EndDragging' });

  const setIsAddingEntry = ( isAdding ) => {
    dispatch({ type: 'UI-IsAddingEntry', payload: isAdding });
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        // Methods
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        endDragging
      }}
    >
      { children }
    </UIContext.Provider>
  );
}

export const uiReducer = ( state, action ) => {
  switch ( action.type ) {
    case 'UI-OpenSidebar':
      return {
        ...state,
        sidemenuOpen: true
      };

    case 'UI-CloseSidebar':
      return {
        ...state,
        sidemenuOpen: false
      };

    case 'UI-IsAddingEntry':
      return {
        ...state,
        isAddingEntry: action.payload
      };

    default: 
      return state;
  }
}

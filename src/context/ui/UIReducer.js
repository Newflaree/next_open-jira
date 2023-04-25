
export const UIReducer = ( state, action ) => {
  switch ( action ) {
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

    default: 
      return state;
  }
}

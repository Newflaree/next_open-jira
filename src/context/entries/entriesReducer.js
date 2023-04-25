export const entriesReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[ENTRY] Add-Entry':
      return {
        ...state,
        entries: [ ...state.entries, action.payload ]
      }

    default:
      return state;
  }
}

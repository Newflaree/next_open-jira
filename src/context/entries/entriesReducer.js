export const entriesReducer = ( state, action ) => {
  switch ( action ) {
    case '[ENTRIES]: ActionName':
      return {
        ...state
      }

    default:
      return state;
  }
}

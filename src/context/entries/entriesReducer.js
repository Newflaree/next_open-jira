export const entriesReducer = ( state, action ) => {
  switch ( action ) {
    case '[ENTRIES]: pending':
      return {
        ...state
      }

    default:
      return state;
  }
}

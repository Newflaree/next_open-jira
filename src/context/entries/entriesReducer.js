export const entriesReducer = ( state, action ) => {
  switch ( action.type ) {
    case '[ENTRY] Add-Entry':
      return {
        ...state,
        entries: [ ...state.entries, action.payload ]
      }

    case '[ENTRY] Entry-Updated':
      return {
        ...state,
        entries: state.entries.map( entry => {
          if ( entry._id === action.payload._id ) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }

          return entry;
        })
      }
      
    case '[ENTRY] Refresh-Data':
      return {
        ...state,
        entries: [ ...action.payload ]
      }

    default:
      return state;
  }
}

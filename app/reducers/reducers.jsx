export var searchTextReducer = (state_searchText = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText ;
    default:
      return state_searchText;
    }
};


// showCompleted
export var showCompletedReducer = (state_showCompleted = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state_showCompleted;
    default:
      return state_showCompleted;
    }
};

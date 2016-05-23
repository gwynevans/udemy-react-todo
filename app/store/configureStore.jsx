var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompletedReducer: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devToolsExcension ? window.devToolsExcension() : f => f
  ));

  return store;
};

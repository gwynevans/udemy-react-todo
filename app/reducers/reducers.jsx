var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state_searchText = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText ;
    default:
      return state_searchText;
    }
};

export var showCompletedReducer = (state_showCompleted = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state_showCompleted;
    default:
      return state_showCompleted;
    }
};

export var todosReducer = (state_todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state_todos,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state_todos.map( (todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        }
        else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state_todos,
        ...action.todos
      ];
    default:
      return state_todos;
    }
};

export var authReducer = (state_auth = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state_auth;
    }
};

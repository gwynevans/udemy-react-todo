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
        { id: uuid(),
          completed: false,
          completedAt: undefined,
          createdAt: moment().unix(),
          text: action.text
        }
      ];
    case 'TOGGLE_TODO':
      var updatedTodos = state_todos.map( (todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;
          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        }
        else {
          return todo;
        }
      });
      return updatedTodos;
    default:
      return state_todos;
    }
};

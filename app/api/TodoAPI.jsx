var $ = require('jQuery');


module.exports = {
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  },

  setTodos: function (todos) {
      if( $.isArray(todos) ) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
  },

  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter( (todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter( (todo) => {
      return searchText.length === 0 || -1 !== todo.text.toLowerCase().indexOf(searchText);
    });

    // Sort with non-completed first
    filteredTodos.sort( (a, b) => {
      if( !a.completed && b.completed ) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};

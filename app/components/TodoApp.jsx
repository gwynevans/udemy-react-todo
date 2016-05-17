var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), completed: false, text: 'Walk the cat' },
        { id: uuid(), completed: true,  text: 'Cut the lawn' },
        { id: uuid(), completed: false, text: 'Wash car' }
      ]
    };
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(), completed: false, text: text }
      ]
    });
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  handleToggle: function (id) {
      var updatedTodos = this.state.todos.map( (todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      this.setState({todos: updatedTodos});
  },

  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList onToggle={this.handleToggle} todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
        {showCompleted ? 'T' : 'F'}, {searchText}
      </div>
    )
  }
});

module.exports = TodoApp;

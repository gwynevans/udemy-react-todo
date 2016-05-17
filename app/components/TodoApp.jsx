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
        { id: uuid(), text: 'Walk the cat' },
        { id: uuid(), text: 'Cut the lawn' },
        { id: uuid(), text: 'Wash car' }
      ]
    };
  },

  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(), text: text }
      ]
    });
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },

  render: function () {
    var {todos, showCompleted, searchText} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
        {showCompleted ? 'T' : 'F'}, {searchText}
      </div>
    )
  }
});

module.exports = TodoApp;

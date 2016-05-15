var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { id: 1, text: 'Walk the cat' },
        { id: 2, text: 'Cut the lawn' },
        { id: 3, text: 'Wash car' }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;

var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var uuid      = require('node-uuid');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var todoId = uuid();
    var todoItem = {id:todoId, completed:false, text:'Test Todo'}
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(
      <Todo onToggle={spy} key={todoId} {...todoItem}/>
    );

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(todoId);
  });
});

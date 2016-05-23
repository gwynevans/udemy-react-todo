var React     = require('react');
var ReactDOM  = require('react-dom');
var expect    = require('expect');
var $         = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');  // Get underlying object for testing

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var todoItem = {id:199, completed:false, text:'Test Todo'}
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(
      <Todo dispatch={spy} key={todoItem.id} {...todoItem}/>
    );

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoItem.id
    });
  });
});

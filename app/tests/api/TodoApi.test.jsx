var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filter Todos', () => {
    var todos = [
      { id: 1, completed: true,  text: 'Some text here' },
      { id: 2, completed: false, text: 'Other text here' },
      { id: 3, completed: true,  text: 'Some text here' }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return only non-completed item(s) when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should retun all todos if search text is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

  });

});

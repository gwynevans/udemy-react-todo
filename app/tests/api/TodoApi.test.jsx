var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('set Todos', () => {
    it('should set valid todos array', () => {
      var todos = [{ id: 23, completed: false, text: 'test all files' }];
      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = { a: 'b' };
      TodoAPI.setTodos(badTodos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('get Todos', () => {
    it('should return empty array for bad localstorage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage data', () => {
      var todos = [{ id: 23, completed: false, text: 'test all files' }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });


  });



});

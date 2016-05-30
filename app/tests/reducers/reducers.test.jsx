var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should set showCompleted true if false', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toBeTruthy();
    });

    it('should set showCompleted false if true', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toBeFalsy();
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something',
          completed: false,
          createdAt: 123456789
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add existing todos', () => {
      var todos = [{
        id:1,
        completed: false,
        completedAt: undefined,
        createdAt: 0,
        text:'Test Todo'
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toBe(todos[0]);
    });

    it('should set completed when toggle Todo called on uncompleted todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var todos = [{
        id:1,
        completed: false,
        completedAt: undefined,
        createdAt: 0,
        text:'Test Todo'
      }];

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should clear completed when toggle Todo called on completed todo', () => {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      var todos = [{
        id: 1,
        completed: true,
        completedAt: 1,
        createdAt: 0,
        text:'Test Todo'
      },
      {
        id: 2,
        completed: false,
        completedAt: undefined,
        createdAt: 0,
        text:'Test Todo'
      }];

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(2);
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toEqual(undefined);
      expect(res[1]).toNotEqual(undefined);
    });

  });

});

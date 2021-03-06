// action types
export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCHING_TODO = 'FETCHING_TODO';
export const FETCHING_TODO_SUCCESS = 'FETCHING_TODO_SUCCESS';
export const FETCHING_TODO_FAILURE = 'FETCHING_TODO_FAILURE';

export function fetchTodoAction() {
  return { type: FETCHING_TODO };
}

export function addTodoAction(newTodo) {
  return { type: ADD_TODO, newTodo };
}

export function delTodoAction(index) {
  return { type: DEL_TODO, index };
}

export function toggleTodoAction(index) {
  return { type: TOGGLE_TODO, index };
}

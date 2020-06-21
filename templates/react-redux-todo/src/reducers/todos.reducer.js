import { createReducer } from '../utils/createReducer';
import { ADD_TODO } from '../actions/todo.actions';

export const todos = createReducer([], {
  [ADD_TODO]: (state, { todo }) => {
     return [...state, todo];
  }
});
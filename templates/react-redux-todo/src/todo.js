import React from 'react';
import TodoList from './connect/todo-list.connect';
import TodoInput from './connect/todo-input.connect';

const Todo = () => (
  <>
    <TodoInput />
    <TodoList />
  </>
);

export default Todo;
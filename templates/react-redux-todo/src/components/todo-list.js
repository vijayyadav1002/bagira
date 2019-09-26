import React from 'react';

export const TodoList = ({todos = []}) => (
  <ul>
    {todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    })}
  </ul>
);
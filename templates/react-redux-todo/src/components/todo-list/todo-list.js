import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos = [] }) => (
  <ul>
    {todos.map((todo, index) => {
      return <li key={index}>{todo}</li>;
    })}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array
};

export { TodoList };
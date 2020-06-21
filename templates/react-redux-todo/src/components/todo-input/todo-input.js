import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TodoInputContainer, TodoInputText, TodoSubmitButton } from './styles';

const TodoInput = (props) => {
  const [ todo, setTodo ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo('');
  };

  const updateTodoText = ({ target }) => {
    setTodo(target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <TodoInputContainer>
        <TodoInputText onChange={updateTodoText} value={todo}/>
        <TodoSubmitButton>Submit</TodoSubmitButton>
      </TodoInputContainer>
    </form>
  );
};

TodoInput.propTypes = {
  addTodo: PropTypes.func
};

export { TodoInput };
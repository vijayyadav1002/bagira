import React, { useState } from 'react';
import { TodoInputContainer, TodoInputText, TodoSubmitButton } from './styles';

export const TodoInput = (props) => {
  const [ todo, setTodo ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todo);
    setTodo('');
  };

  const updateTodoText = ({target}) => {
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
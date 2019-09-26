import React, { useState } from 'react';

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
      <input type="text" onChange={updateTodoText} value={todo}/>
      <button type="submit">Submit</button>
    </form>  
  );
}
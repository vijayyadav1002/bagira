import React from 'react';
import TodoList from './connect/todo-list.connect';
import TodoInput from './connect/todo-input.connect';
import styled from 'styled-components';

const TodoWrapper = styled.div`
    margin: 5rem auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 3rem;
`;

const Todo = () => (
  <TodoWrapper>
    <Heading>Things to do</Heading>
    <TodoInput />
    <TodoList />
  </TodoWrapper>
);

export default Todo;
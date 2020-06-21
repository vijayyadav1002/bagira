import React from 'react';
import TodoList from './connect/todo-list.connect';
import TodoInput from './connect/todo-input.connect';
import { TodoWrapper, Container, Heading } from './styles';

const Todo = () => (
  <TodoWrapper>
      <Container>
        <Heading>Things to do</Heading>
        <TodoInput />
        <TodoList />
      </Container>
  </TodoWrapper>
);

export default Todo;
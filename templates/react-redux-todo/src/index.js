import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './todo';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const renderAtRoot = () => render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('app')
);

export { renderAtRoot };

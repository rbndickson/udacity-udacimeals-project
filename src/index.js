import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

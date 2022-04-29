import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './layout/Layout';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Layout />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

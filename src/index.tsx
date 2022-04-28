import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './Layout/Layout';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root')
);

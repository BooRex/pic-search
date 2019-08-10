import './assets/app.scss';

import React from 'react';
import routes from './routing/routes';

import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { configureStore } from './store';
import rootSaga from './store/rootSaga';
import rootReducer from './store/rootReducer';
import history from './history';

const target = document.querySelector('#root');
const store = configureStore(rootReducer, rootSaga);

render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route>{ routes }</Route>
    </Router>
  </Provider>,
  target
);

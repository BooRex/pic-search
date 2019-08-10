import * as serviceWorker from '../serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (reducer, sagas, initialState) => {
  const middlewares = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  );

  const devtools =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f;

  const store = createStore(
    reducer,
    initialState,
    compose(middlewares, devtools),
  );

  sagaMiddleware.run(sagas);
  serviceWorker.register();

  return store;
};

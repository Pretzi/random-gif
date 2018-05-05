import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import reducers from './reducers';
import logics from './logics';
import './index.css';
import AppContainer from './containers/AppContainer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  ...reducers
});

const reduxLogicMiddleware = createLogicMiddleware(logics, {});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(reduxLogicMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import axios from 'axios';
import reducers from './reducers';
import logics from './logics';
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  ...reducers
});

const reduxLogicMiddleware = createLogicMiddleware(logics, {
  axios,
  APIKEY: 'h7XYSMDQGAe7jdli56bt5jvHeE6BVR2m'
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(reduxLogicMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
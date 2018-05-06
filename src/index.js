import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { Provider } from 'react-redux';
import axios from 'axios';
import reducers from './reducers';
import logics from './logics';
import './index.css';
import RandomGifsComponent from './RandomGifsComponent';

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
  <RandomGifsComponent store={store} />,
  document.getElementById('root')
);

const ApplicasterTest = (props) => {
  return (
    <Provider store={store}>
      <RandomGifsComponent {...props} />
    </Provider>
  )
};

export default ApplicasterTest

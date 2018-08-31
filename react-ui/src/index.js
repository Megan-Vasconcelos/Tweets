import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import registerServiceWorker from './Components/registerServiceWorker';

import tweetReducers from './Reducers/index';
import watchfetchTweetsAsync from './Sagas/tweets.js' 
import Routes from './Routes';
import './index.css';

const sagaMiddleware =createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware)
// const store = createStore(
//   tweetReducers,
//   compose(middleware,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
const store = createStore(
  tweetReducers,
  middleware
);


sagaMiddleware.run(watchfetchTweetsAsync); 

ReactDOM.render(
  <Provider store = {store}>
  <Routes />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
import { call, put, takeEvery } from 'redux-saga/effects';

import fetchTweets from './api';
import { FETCH_TWEETS, fetchTweetsSuccess } from '../Action';



// worker Saga
const fetchTweetsAsync = function* (action) {
  try {
      console.log("test")
    const tweets = yield call(fetchTweets, action.username);
    yield put(fetchTweetsSuccess(tweets));
  } catch (error) {
    console.log('Failed to fetch tweets!');
    console.log(error);
  }
};

// watcher Saga
const watchfetchTweetsAsync = function* () {
  yield takeEvery(FETCH_TWEETS, fetchTweetsAsync);
};

export default watchfetchTweetsAsync;
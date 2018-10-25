import request from 'utils/request';
import { put, select, takeEvery } from 'redux-saga/effects';
import { ADD_STRING, CHANGE_STRING } from './constants';
import { addStringError } from './actions';
import { makeSelectString } from './selectors';

export function* addString() {
  const string = yield select(makeSelectString());
  const requestURL = '/api';
  try {
    yield request(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string }),
    });
    yield put({ type: CHANGE_STRING, string: '' });
    // yield put({ type: CHANGE_STRING, string: '' });
  } catch (err) {
    yield put(addStringError(err));
  }
}

export default function* newString() {
  yield takeEvery(ADD_STRING, addString);
}

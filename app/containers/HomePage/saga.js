import { put, select, takeEvery } from 'redux-saga/effects';
import request from '../../utils/request';
import {
  ADD_STRING,
  CHANGE_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from './constants';
import { makeSelectString } from './selectors';

export function* addString() {
  const string = yield select(makeSelectString());
  const requestURL = '/api';
  try {
    yield [
      request(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ string }),
      }),
      put({ type: ADD_STRING_SUCCESS, stringEntered: string }),
      put({ type: CHANGE_STRING, string: '' }),
      put({ type: ADD_STRING_ERROR, addError: false }),
    ];
  } catch (err) {
    yield put({ type: ADD_STRING_ERROR, addError: true });
  }
}

// watch saga
export default function* newString() {
  yield takeEvery(ADD_STRING, addString);
}

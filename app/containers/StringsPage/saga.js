import { put, call, takeEvery } from 'redux-saga/effects';
import request from '../../utils/request';
import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_ERROR,
} from './constants';

export function* getStrings() {
  const requestURL = '/api';
  try {
    const strings = yield call(request, requestURL);
    yield put({ type: GET_STRINGS_SUCCESS, strings });
  } catch (err) {
    yield put({ type: GET_STRINGS_ERROR, getError: true });
  }
}

export default function* showStrings() {
  yield takeEvery(GET_STRINGS, getStrings);
}

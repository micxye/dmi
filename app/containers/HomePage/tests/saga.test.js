import { takeEvery } from 'redux-saga/effects';

import { ADD_STRING } from '../constants';
import newString, { addString } from '../saga';

describe('newString watcher saga', () => {
  const watcherSaga = newString();

  it('should start task to watch for ADD_STRING action', () => {
    const takeLatestDescriptor = watcherSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeEvery(ADD_STRING, addString));
  });
});

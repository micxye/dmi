import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeString, addStringSuccess } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      string: '',
      stringEntered: '',
      addError: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const fixture = 'hello';
    const expectedResult = state.set('string', fixture);

    expect(homeReducer(state, changeString(fixture))).toEqual(expectedResult);
  });

  it('should handle the addStringSuccess action correctly', () => {
    const fixture = 'dovenmuehle';
    const expectedResult = state.set('stringEntered', fixture);

    expect(homeReducer(state, addStringSuccess(fixture))).toEqual(
      expectedResult,
    );
  });
});

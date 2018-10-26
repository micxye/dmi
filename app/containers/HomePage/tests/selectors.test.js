import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectString,
  makeSelectStringEntered,
  makeSelectError,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      string: '',
      stringEntered: '',
      addError: false,
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('selectString', () => {
  const stringSelector = makeSelectString();
  it('should select the string', () => {
    const string = 'some string';
    const mockedState = fromJS({
      home: {
        string,
      },
    });
    expect(stringSelector(mockedState)).toEqual(string);
  });
});

describe('selectStringEntered', () => {
  const stringEnteredSelector = makeSelectStringEntered();
  it('should select the last string entered (enteredString)', () => {
    const stringEntered = 'some string';
    const mockedState = fromJS({
      home: {
        stringEntered,
      },
    });
    expect(stringEnteredSelector(mockedState)).toEqual(stringEntered);
  });
});

describe('selectError', () => {
  const stringEnteredSelector = makeSelectError();
  it('should tell us if there was an error adding the string', () => {
    const addError = true;
    const mockedState = fromJS({
      home: {
        addError,
      },
    });
    expect(stringEnteredSelector(mockedState)).toEqual(addError);
  });
});

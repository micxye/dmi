import {
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  CHANGE_STRING,
} from '../constants';

import {
  addString,
  addStringSuccess,
  addStringError,
  changeString,
} from '../actions';

describe('Home Actions', () => {
  describe('changeString', () => {
    it('should return the correct type and the passed in string', () => {
      const fixture = 'an arbitrary string';
      const expectedResult = {
        type: CHANGE_STRING,
        string: fixture,
      };

      expect(changeString(fixture)).toEqual(expectedResult);
    });
  });

  describe('addString', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_STRING,
      };

      expect(addString()).toEqual(expectedResult);
    });
  });

  describe('addStringSuccess', () => {
    it('should return the last string entered', () => {
      const fixture = 'an arbitrary string';
      const expectedResult = {
        type: ADD_STRING_SUCCESS,
        stringEntered: fixture,
      };

      expect(addStringSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('addStringError', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ADD_STRING_ERROR,
      };

      expect(addStringError()).toEqual(expectedResult);
    });
  });
});

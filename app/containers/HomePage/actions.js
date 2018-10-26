import {
  ADD_STRING,
  CHANGE_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
} from './constants';

export function addString(string) {
  return {
    type: ADD_STRING,
    string,
  };
}

export function addStringSuccess(stringEntered) {
  return {
    type: ADD_STRING_SUCCESS,
    stringEntered,
  };
}

export function addStringError(error) {
  return {
    type: ADD_STRING_ERROR,
    addError: error,
  };
}

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

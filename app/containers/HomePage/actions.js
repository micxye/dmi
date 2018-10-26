import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR, CHANGE_STRING } from './constants';

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
    error,
  };
}

export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

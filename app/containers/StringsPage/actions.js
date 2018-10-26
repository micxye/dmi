import {
  GET_STRINGS,
  GET_STRINGS_SUCCESS,
  GET_STRINGS_ERROR,
} from './constants';

export function getStrings() {
  return {
    type: GET_STRINGS,
  };
}

export function getStringsSuccess(strings) {
  return {
    type: GET_STRINGS_SUCCESS,
    strings,
  };
}

export function getStringsError(error) {
  return {
    type: GET_STRINGS_ERROR,
    getError: error,
  };
}

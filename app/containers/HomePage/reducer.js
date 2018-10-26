import { fromJS } from 'immutable';

import {
  ADD_STRING_SUCCESS,
  ADD_STRING_ERROR,
  CHANGE_STRING,
} from './constants';

export const initialState = fromJS({
  string: '',
  stringEntered: '',
  addError: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING: // form update
      return state.set('string', action.string);
    case ADD_STRING_SUCCESS:
      return state.set('stringEntered', action.stringEntered);
    case ADD_STRING_ERROR:
      return state.set('addError', action.addError);
    default:
      return state;
  }
}

export default homeReducer;

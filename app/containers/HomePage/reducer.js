/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { ADD_STRING, ADD_STRING_SUCCESS, ADD_STRING_ERROR, CHANGE_STRING } from './constants';

// The initial state of the App
export const initialState = fromJS({
  string: '',
  stringEntered: '',
  addSuccess: false,
  addError: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      // update form
      return state.set('string', action.string);
    case ADD_STRING:
      return state.set('stringEntered', action.string);
    case ADD_STRING_ERROR:
      return state.set('addError', action.error);
    default:
      return state;
  }
}

export default homeReducer;

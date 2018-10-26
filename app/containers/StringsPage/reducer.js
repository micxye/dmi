import { fromJS } from 'immutable';
import { GET_STRINGS_SUCCESS, GET_STRINGS_ERROR } from './constants';

export const initialState = fromJS({
  strings: [],
  getError: false,
});

function stringsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STRINGS_SUCCESS:
      return state.set('strings', action.strings);
    case GET_STRINGS_ERROR:
      return state.set('error', action.getError);
    default:
      return state;
  }
}

export default stringsReducer;

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectStrings = state => state.get('strings', initialState);

const makeSelectStrings = () =>
  createSelector(selectStrings, stringsState => stringsState.get('strings'));

export { selectStrings, makeSelectStrings };

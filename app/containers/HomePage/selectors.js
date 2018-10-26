import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectString = () =>
  createSelector(selectHome, homeState => homeState.get('string'));

const makeSelectStringEntered = () =>
  createSelector(selectHome, homeState => homeState.get('stringEntered'));

const makeSelectError = () =>
  createSelector(selectHome, homeState => homeState.get('addError'));

export {
  selectHome,
  makeSelectString,
  makeSelectStringEntered,
  makeSelectError,
};

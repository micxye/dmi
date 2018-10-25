/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import saga from './saga';
import reducer from './reducer';
import Form from './Form';
import Input from './Input';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { addString, changeString } from './actions';
import {   
  makeSelectString,
  makeSelectStringEntered,
  makeSelectError,
} from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.onSubmitForm}>
          Enter String Here:
          <Input value={this.props.string} onChange={this.props.onChangeString}/>
        </Form>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: e => dispatch(changeString(e.target.value)),
    onSubmitForm: e => {
      if (e !== undefined && e.preventDefault) e.preventDefault();
      dispatch(addString());
    }
  }
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  stringEntered: makeSelectStringEntered(),
  error: makeSelectError()
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
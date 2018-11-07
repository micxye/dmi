import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './saga';
import reducer from './reducer';
import Form from './Form';
import LastString from './LastString';
import Input from './Input';
import SubmitButton from './SubmitButton';
import { addString, changeString } from './actions';
import {
  makeSelectString,
  makeSelectStringEntered,
  makeSelectError,
} from './selectors';

const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 500px;
  min-height: 100%;
  flex-direction: column;
`;

export class HomePage extends React.PureComponent {
  renderLastString() {
    if (this.props.error) {
      return 'ERROR adding string to database';
    }
    if (this.props.stringEntered) {
      return `'${this.props.stringEntered}' added to database!`;
    }
    return null;
  }

  render() {
    const show = this.props.string.length > 0;
    console.log(this.props.string)
    return (
      <HomeWrapper>
        <Form onSubmit={this.props.onSubmitForm}>
          Enter String ⇨:
          <Input
            value={this.props.string}
            onChange={this.props.onChangeString}
          />
          <SubmitButton show={show} type="submit" value="Submit String" />
        </Form>
        <LastString>{this.renderLastString()}</LastString>
      </HomeWrapper>
    );
  }
}

HomePage.propTypes = {
  onChangeString: PropTypes.func,
  onSubmitForm: PropTypes.func,
  string: PropTypes.string,
  stringEntered: PropTypes.string,
  error: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: e => dispatch(changeString(e.target.value)),
    onSubmitForm: e => {
      e.preventDefault();
      dispatch(addString());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  stringEntered: makeSelectStringEntered(),
  error: makeSelectError(),
});

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

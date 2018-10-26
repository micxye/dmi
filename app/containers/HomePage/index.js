import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import saga from './saga';
import reducer from './reducer';
import Form from './Form';
import LastString from './LastString';
import Input from './Input';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { addString, changeString } from './actions';
import {   
  makeSelectString,
  makeSelectStringEntered,
  makeSelectError,
} from './selectors';

const HomeWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 300px;
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
  }

  render() {
    return (
      <HomeWrapper>
        <Form onSubmit={this.props.onSubmitForm}>
          Enter String Here:
          <Input value={this.props.string} onChange={this.props.onChangeString}/>
        </Form>
        <LastString>{this.renderLastString()}</LastString>
      </HomeWrapper>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: e => dispatch(changeString(e.target.value)),
    onSubmitForm: (e) => {
      e.preventDefault();
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
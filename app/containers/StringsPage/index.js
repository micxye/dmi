import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectStrings } from './selectors';
import { getStrings } from './actions';
import saga from './saga';
import reducer from './reducer';

const StringsPageWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 300px;
  min-height: 100%;
  flex-direction: column;
`;

export class StringsPage extends React.PureComponent {
  componentDidMount() {
    // get strings from db, save to store
    this.props.getStrings();
  }

  render() {
    console.log(this.props.strings)
    return (
      <StringsPageWrapper>
        {this.props.strings.map((string, i) => {
          return <div key={i}>{`'${string.string}'`}</div>;
        })}
      </StringsPageWrapper>
    );
  }
}

StringsPage.propTypes = {
  getStrings: PropTypes.func,
  strings: PropTypes.array,
};

export function mapDispatchToProps(dispatch) {
  return {
    getStrings: () => dispatch(getStrings()),
  };
}

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'strings', reducer });
const withSaga = injectSaga({ key: 'strings', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(StringsPage);

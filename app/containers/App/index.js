import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import StringsPage from 'containers/StringsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/strings" component={StringsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';

export default () => (
  <Switch>
    <Route exact path={ '/' } component={ MainPage }/>
  </Switch>
);

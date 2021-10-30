import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, LoginAuth } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
      <LoginAuth />
    </Route>
  </Switch>
);

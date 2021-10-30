import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, LoginAuth, InputsPage } from '../components';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/meetings" exact>
      <InputsPage />
    </Route>
  </Switch>
);

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CITiMarco } from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <CITiMarco />
    </Route>
  </Switch>
);

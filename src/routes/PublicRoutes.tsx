import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Home,
  CreateEvent,
} from '../pages';

export const PublicRoutes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/create-event" exact>
      <CreateEvent />
    </Route>
  </Switch>
);

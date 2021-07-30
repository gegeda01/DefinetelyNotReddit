import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage } from '.';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;

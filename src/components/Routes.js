import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;

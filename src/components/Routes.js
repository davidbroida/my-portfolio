import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cryptocrunch from './Cryptocrunch';
import Musicmatch from './Musicmatch';
import Jeopardy from './Jeopardy';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects/cryptocrunch">
          <Cryptocrunch />
        </Route>
        <Route exact path="/projects/musicmatch">
          <Musicmatch />
        </Route>
        <Route exact path="/projects/jeopardy">
          <Jeopardy />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;

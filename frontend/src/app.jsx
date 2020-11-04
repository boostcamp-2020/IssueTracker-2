import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login, Milestone } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/mileston">
          <Milestone />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

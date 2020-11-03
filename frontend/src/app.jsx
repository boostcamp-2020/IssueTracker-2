import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';

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

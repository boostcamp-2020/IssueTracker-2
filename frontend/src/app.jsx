import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';

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

import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login, Milestone, CreateMilestone, EditMilestone } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/milestones" component={Milestone} />
        <Route path="/milestonesNew" component={CreateMilestone} />
        <Route path="/milestonesEdit" component={EditMilestone} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

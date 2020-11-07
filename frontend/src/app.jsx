import React from 'react';
import './app.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Login,
  Milestone,
  CreateMilestone,
  EditMilestone,
  Label,
  IssueCreation,
  Issue,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/milestones" component={Milestone} />
        <Route path="/milestone/new" component={CreateMilestone} />
        <Route path="/milestone/edit" component={EditMilestone} />
        <Route path="/labels" component={Label} />
        <Route path="/issue/create" component={IssueCreation} />
        <Route path="/issues" component={Issue} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

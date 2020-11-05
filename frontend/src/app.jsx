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
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/milestones" component={Milestone} />
        <Route path="/milestonesNew" component={CreateMilestone} />
        <Route path="/milestonesEdit" component={EditMilestone} />
        <Route path="/label" component={Label} />
        <Route path="/issueCreation" component={IssueCreation} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

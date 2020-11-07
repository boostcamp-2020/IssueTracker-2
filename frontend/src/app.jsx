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
        <Route path="/milestone/new" component={CreateMilestone} />
        <Route path="/milestone/edit" component={EditMilestone} />
        <Route path="/label" component={Label} />
        <Route path="/issue/create" component={IssueCreation} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

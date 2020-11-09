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

const App = ({ milestoneService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/milestones"
          milestoneService={milestoneService}
          component={Milestone}
        />
        <Route
          path="/milestone/new"
          render={() => <CreateMilestone milestoneService={milestoneService} />}
        />
        <Route
          path="/milestone/edit"
          render={() => <EditMilestone milestoneService={milestoneService} />}
        />
        <Route path="/labels" component={Label} />
        <Route path="/issue/create" component={IssueCreation} />
        <Route path="/issues" component={Issue} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

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
  IssueDetail,
} from './pages';

const App = ({ milestoneService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/milestones"
          render={() => <Milestone milestoneService={milestoneService} />}
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
        <Route exact path="/issue/:id" component={IssueDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

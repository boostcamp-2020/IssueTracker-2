import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import MilestoneService from './service/milestone';

const milestoneService = new MilestoneService();

ReactDOM.render(
  <App milestoneService={milestoneService} />,
  document.getElementById('root'),
);

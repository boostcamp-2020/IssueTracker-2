import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import MilestoneService from './service/milestone';

const milestoneService = new MilestoneService();
console.log(milestoneService);
ReactDOM.render(
  <App milestoneService={milestoneService} />,
  document.getElementById('root'),
);

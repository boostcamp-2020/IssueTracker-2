import React from 'react';
import styled from 'styled-components';
import { AlertIcon, CalendarIcon, ClockIcon } from '@primer/octicons-react';

export default function LeftContent({ milestone }) {
  return (
    <ContentLeft>
      <MilestoneTitle>{milestone.milestone_name}</MilestoneTitle>
      <DueInfo>
        <CalendarIcon />
        or
        <AlertIcon />
        <Duedate>
          <ClockIcon />
          <UpdatedTime>Last updated about 2 hours ago</UpdatedTime>
        </Duedate>
      </DueInfo>
      <MilestoneDescription>
        {milestone.milestone_description}
      </MilestoneDescription>
    </ContentLeft>
  );
}

const ContentLeft = styled.span``;

const MilestoneTitle = styled.span`
  font-size: 1.8em;
`;

const DueInfo = styled.span`
  margin-top: 0.5em;
  display: flex;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
`;

const Duedate = styled.span`
  display: flex;
  margin-left: 1em;
`;

const MilestoneDescription = styled.div`
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const UpdatedTime = styled.span`
  margin-left: 1em;
`;

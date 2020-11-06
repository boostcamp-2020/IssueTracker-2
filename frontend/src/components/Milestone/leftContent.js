import React from 'react';
import styled from 'styled-components';
import { AlertIcon, CalendarIcon, ClockIcon } from '@primer/octicons-react';

export default function LeftContent(props) {
  return (
    <ContentLeft>
      <MilestoneTitle>[WEB] 마일스톤 페이지 마크업</MilestoneTitle>
      <DueInfo>
        <AlertIcon />
        <DueDate>Past due by about 10 hours</DueDate>

        <DueUpdate>
          <ClockIcon />
          <UpdatedTime>Last updated about 2 hours ago</UpdatedTime>
        </DueUpdate>
      </DueInfo>
      <MilestoneDescription>마일스톤 페이지 마크업</MilestoneDescription>
    </ContentLeft>
  );
}

const ContentLeft = styled.span``;

const MilestoneTitle = styled.span`
  font-size: 1.5em;
`;

const DueInfo = styled.span`
  margin-top: 0.5em;
  display: flex;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
`;

const DueDate = styled.span`
  margin-left: 0.5em;
  font-weight: bold;
`;

const DueUpdate = styled.span`
  display: flex;
  margin-left: 1em;
`;

const MilestoneDescription = styled.div`
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const UpdatedTime = styled.span`
  margin-left: 0.5em;
`;

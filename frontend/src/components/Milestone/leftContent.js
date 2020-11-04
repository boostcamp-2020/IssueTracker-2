import React from 'react';
import styled from 'styled-components';
import { AlertIcon, CalendarIcon, ClockIcon } from '@primer/octicons-react';

export default function LeftContent(props) {
  return (
    <ContentLeft>
      <MilestoneTitle>[WEB] 마일스톤 페이지 마크업</MilestoneTitle>
      <DueInfo>
        <CalendarIcon />
        or
        <AlertIcon />
        <Duedate>
          <ClockIcon />
          Last updated about 2 hours ago
        </Duedate>
      </DueInfo>
      <MilestoneDescription>마일스톤 페이지 마크업</MilestoneDescription>
    </ContentLeft>
  );
}

const ContentLeft = styled.span``;

const MilestoneTitle = styled.span`
  font-size: 1.8em;
`;

const DueInfo = styled.span`
  margin-top: 0.3em;
  display: flex;
  position: relative;
  color: rgba(0, 0, 0, 0.7);
`;

const Duedate = styled.span`
  display: flex;
  margin-left: 1em;
`;

const MilestoneDescription = styled.div`
  margin-top: 0.3em;
  color: rgba(0, 0, 0, 0.7);
`;

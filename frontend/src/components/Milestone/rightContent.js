import React from 'react';
import styled from 'styled-components';

const getPercent = (open, close) => {
  if (open === 0) return 0;
  return close / (open + close);
};

export default function RightContent({ milestone }) {
  return (
    <ContentRight>
      <GaugeBar>
        <PercentGauge />
      </GaugeBar>
      <Info>
        <Percent>
          {`${getPercent(milestone.open_count, milestone.close_count)}%`}
        </Percent>
        <span>complete</span>
        <OpenCount>{milestone.open_count}</OpenCount>
        <span>open</span>
        <ClosedCount>{milestone.close_count}</ClosedCount>
        <span>closed</span>
      </Info>

      <Buttons>
        <BlueTextButton>Edit</BlueTextButton>
        <BlueTextButton>Close</BlueTextButton>
        <RedTextButton>Delete</RedTextButton>
      </Buttons>
    </ContentRight>
  );
}

const ContentRight = styled.span`
  width: 40%;
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

const GaugeBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PercentGauge = styled.div`
  width: 40%;
  height: 10px;
  border-radius: 50px;
  background-color: green;
`;

const Info = styled.div`
  margin-top: 1em;
  display: flex;
`;

const BlueTextButton = styled.a`
  color: blue;
  margin-right: 1em;
  text-decoration: none;
`;

const RedTextButton = styled.a`
  color: red;
  text-decoration: none;
`;

const Buttons = styled.div`
  margin-top: 1em;
`;

const Percent = styled.span`
  font-weight: bold;
  margin-right: 0.5em;
`;

const OpenCount = styled.span`
  margin: 0 0.5em;
  font-weight: bold;
`;
const ClosedCount = styled.span`
  margin: 0 0.5em;
  font-weight: bold;
`;

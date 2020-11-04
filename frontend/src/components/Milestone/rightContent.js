import React from 'react';
import styled from 'styled-components';
export default function RightContent(props) {
  return (
    <ContentRight>
      <GaugeBar>
        <PercentGauge />
      </GaugeBar>
      <Info>
        <span>40% complete</span>
        <span>2 open</span>
        <span>1 closed</span>
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

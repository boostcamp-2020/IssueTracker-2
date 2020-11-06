import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
export default function RightContent(props) {
  const history = useHistory();
  const onClick = () => {
    history.push('/milestone/edit');
  };
  return (
    <ContentRight>
      <GaugeBar>
        <PercentGauge />
      </GaugeBar>
      <Info>
        <Percent>40%</Percent>
        <span>complete</span>
        <OpenCount>3</OpenCount>
        <span>open</span>
        <ClosedCount>2</ClosedCount>
        <span>closed</span>
      </Info>

      <Buttons>
        <BlueTextButton onClick={onClick}>Edit</BlueTextButton>
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
  color: #0366d6;
  margin-right: 1em;
  text-decoration: none;
  cursor: pointer;
`;

const RedTextButton = styled.a`
  color: #cb2431;
  text-decoration: none;
  cursor: pointer;
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

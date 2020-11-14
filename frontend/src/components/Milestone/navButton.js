import React, { useState } from 'react';
import styled from 'styled-components';

import NavigationButton from '../Common/NavButton';
import CreateButton from '../Common/GreenButton';
import { useHistory } from 'react-router-dom';

export default function NavButton(props) {
  const history = useHistory();
  const onClickNewMilestone = () => {
    history.push('/milestone/new');
  };
  return (
    <Nav>
      <NavigationButton type="milestone" />
      <ButtonWrapper>
        <CreateButton onClick={onClickNewMilestone} content="New milestone" />
      </ButtonWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 80%;
  margin: auto;
  padding: 3em 0;
  position: relative;
`;

const LabelButton = styled.span`
  display: inline-block;
  padding: 0.5em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-right: none;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

const Text = styled.span`
  margin-left: 5px;
  font-size: 0.9em;
`;

const MilestoneButton = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: white;
  background-color: #0366d6;
  fill: white;
`;

const ButtonWrapper = styled.span`
  position: absolute;
  right: 0;
`;

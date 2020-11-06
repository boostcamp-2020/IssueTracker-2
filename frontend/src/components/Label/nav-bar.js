import React, { useState } from 'react';
import styled from 'styled-components';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import CreateButton from '../Common/greenButton';
import { useHistory } from 'react-router-dom';

export default function NavButton(props) {
  const history = useHistory();
  const onClick = () => {
    history.push('/milestones');
  };
  return (
    <Nav>
      <LabelButton>
        <TagIcon size={17} />
        <Text>Labels</Text>
      </LabelButton>
      <MilestoneButton onClick={onClick}>
        <MilestoneIcon size={17} />
        <Text>Milestones</Text>
      </MilestoneButton>
      <CreateButton content="New Label" position="right" />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;

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
  color: white;
  background-color: #0366d6;
  fill: white;
`;

const Text = styled.span`
  margin-left: 5px;
  font-size: 0.9em;
  cursor: pointer;
`;

const MilestoneButton = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

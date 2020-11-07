import React from 'react';
import styled from 'styled-components';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';

export default function NavButton(props) {
  return (
    <>
      <LabelButton>
        <TagIcon size={17} />
        <Text>Labels</Text>
      </LabelButton>
      <MilestoneButton>
        <MilestoneIcon size={17} />
        <Text>Milestones</Text>
      </MilestoneButton>
    </>
  );
}

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

import React from 'react';
import styled from 'styled-components';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';

export default function NavButton(props) {
  return (
    <>
      <LabelButton type={props.type}>
        <TagIcon size={20} />
        <Text>Labels</Text>
        {props.type === 'issue' && <Count>3</Count>}
      </LabelButton>
      <MilestoneButton type={props.type}>
        <MilestoneIcon size={20} />

        <Text>Milestones</Text>
        {props.type === 'issue' && <Count>4</Count>}
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
  font-weight: bold;
`;

const Count = styled.span`
  display: inline-block;
  width: 2em;
  height: 1.3em;
  text-align: center;
  line-height: 1.5em;
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  margin-left: 0.2em;
`;

const MilestoneButton = styled.span`
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  ${props => {
    if (props.type !== 'issue') {
      return 'color:white; background-color:#0366d6; fill:white;';
    }
  }}
`;

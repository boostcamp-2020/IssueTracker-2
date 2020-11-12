import React from 'react';
import styled from 'styled-components';
import { TagIcon, MilestoneIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';

export default function NavButton({ type, milestoneCount, labelCount }) {
  const history = useHistory();

  const onClickLabelNav = () => {
    history.push('/labels');
  };

  const onClickMilestoneNav = () => {
    history.push('/milestones');
  };

  return (
    <>
      <LabelButton onClick={onClickLabelNav} type={type}>
        <TagIcon size={20} />
        <Text>Labels</Text>
        {type === 'issue' && <Count>{labelCount}</Count>}
      </LabelButton>
      <MilestoneButton onClick={onClickMilestoneNav} type={type}>
        <MilestoneIcon size={20} />

        <Text>Milestones</Text>
        {type === 'issue' && <Count>{milestoneCount}</Count>}
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

  ${props => {
    if (props.type === 'label') {
      return 'color:white; background-color:#0366d6; fill:white;';
    }
    return `&:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }`;
  }}
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
    if (props.type === 'milestone') {
      return 'color:white; background-color:#0366d6; fill:white;';
    }
    return `&:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }`;
  }}
`;

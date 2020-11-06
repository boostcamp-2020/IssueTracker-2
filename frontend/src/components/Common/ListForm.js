import React from 'react';
import styled from 'styled-components';
import { MilestoneIcon, CheckIcon } from '@primer/octicons-react';

export default function ListForm(props) {
  const getHeaderContent = type => {
    if (type === 'issue') {
      return (
        <>
          <MilestoneIcon size={20} />
          <Open>
            <Count>2</Count>
            <span>Open</span>
          </Open>
          <Closed>
            <CheckIcon size={22} />
            <Count>0</Count>
            <span>Closed</span>
          </Closed>
          <FilteringConditions>
            <span>Author</span>
            <span>label</span>
            <span>Projects</span>
            <span>Milestones</span>
            <span>Assignee</span>
            <span>Sort</span>
          </FilteringConditions>
        </>
      );
    }
    if (type === 'milestone') {
      return (
        <>
          <MilestoneIcon size={20} />
          <Open>
            <Count>2</Count>
            <span>Open</span>
          </Open>
          <Closed>
            <CheckIcon size={22} />
            <Count>0</Count>
            <span>Closed</span>
          </Closed>
        </>
      );
    }
    if (type === 'label') {
      return (
        <>
          <span>13</span>
          <span>labels</span>
        </>
      );
    }
  };

  return (
    <Wrapper>
      <ListHeader>{getHeaderContent(props.type)}</ListHeader>
      <List>{props.content}</List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  height: 25em;
  margin: auto;
`;

const ListHeader = styled.div`
  display: flex;

  width: 100%;
  padding: 0.5em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
  background-color: rgba(0, 0, 0, 0.05);
`;

const Open = styled.span``;
const Count = styled.span`
  margin-left: 0.3em;
  margin-right: 0.3em;
`;
const Closed = styled.span`
  margin-left: 1em;
`;

const List = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const FilteringConditions = styled.div``;

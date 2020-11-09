import React from 'react';
import styled from 'styled-components';
import {
  MilestoneIcon,
  IssueOpenedIcon,
  CheckIcon,
} from '@primer/octicons-react';
import DropdownCaret from './DropdownCaret';

export default function ListForm(props) {
  const getHeaderContent = type => {
    if (type === 'issue') {
      return (
        <HeaderWrapper>
          <Checkbox type="checkbox" />
          <IssueOpenedIcon size={18} />
          <Open>
            <Count>2</Count>
            <span>Open</span>
          </Open>
          <CheckIcon size={20} />
          <Closed>
            <Count>0</Count>
            <span>Closed</span>
          </Closed>
          <FilteringConditions>
            <Condition>
              Author
              <DropdownCaret />
            </Condition>
            <Condition>
              label
              <DropdownCaret />
            </Condition>
            <Condition>
              Projects
              <DropdownCaret />
            </Condition>
            <Condition>
              Milestones
              <DropdownCaret />
            </Condition>
            <Condition>
              Assignee
              <DropdownCaret />
            </Condition>
            <Condition>
              Sort
              <DropdownCaret />
            </Condition>
          </FilteringConditions>
        </HeaderWrapper>
      );
    }
    if (type === 'milestone') {
      return (
        <HeaderWrapper>
          <MilestoneIcon size={19} />
          <Open>
            <Count>2</Count>
            <span>Open</span>
          </Open>
          <Closed>
            <CheckIcon size={22} />
            <Count>0</Count>
            <span>Closed</span>
          </Closed>
        </HeaderWrapper>
      );
    }
    if (type === 'label') {
      return (
        <HeaderWrapper>
          <LabelCount>13</LabelCount>
          <LabelTitle>labels</LabelTitle>
        </HeaderWrapper>
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

const LabelCount = styled.span`
  margin-right: 0.5em;
  font-weight: bold;
`;
const LabelTitle = styled.span`
  font-weight: bold;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 25em;
  margin: auto;
`;

const Checkbox = styled.input`
  margin-right: 1.5em;
`;
const ListHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1.3em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
  background-color: rgba(0, 0, 0, 0.05);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-left: 0;
`;
const Open = styled.span`
  margin-left: 0.2em;
  margin-right: 1.3em;
  transform: translateY(1px);
`;
const Count = styled.span`
  margin-left: 0.3em;
  margin-right: 0.3em;
`;
const Closed = styled.span`
  transform: translateY(1px);
`;

const List = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Condition = styled.summary`
  cursor: pointer;
`;
const FilteringConditions = styled.div`
  position: absolute;
  right: 0;
  width: 40%;
  display: flex;
  justify-content: space-around;
`;
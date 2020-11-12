import React from 'react';
import styled from 'styled-components';
import {
  MilestoneIcon,
  IssueOpenedIcon,
  CheckIcon,
} from '@primer/octicons-react';
import DropdownCaret from './DropdownCaret';
import PopupContent from '../Common/popup';

const COLOUMN_LIST = [
  'Author',
  'Label',
  'Projects',
  'Milestones',
  'Assignee',
  'Sort',
];

export default function ListForm(props) {
  const handleCheckbox = e => {
    let newCheckList = props.isCheckList.map(() => e.target.checked);
    props.setIsAllChecked(e.target.checked);
    props.setIsCheckList(newCheckList);
  };

  const getHeaderContent = type => {
    if (type === 'issue') {
      return (
        <HeaderWrapper>
          <Checkbox
            type="checkbox"
            onClick={handleCheckbox}
            checked={props.isAllChecked}
          />
          <IssueOpenedIcon size={18} />
          <Open>
            <Count>
              {
                props.issueListData.filter(issueData => issueData.issue_status)
                  .length
              }
            </Count>
            <span>Open</span>
          </Open>
          <CheckIcon size={20} />
          <Closed>
            <Count>
              {
                props.issueListData.filter(issueData => !issueData.issue_status)
                  .length
              }
            </Count>
            <span>Closed</span>
          </Closed>
          {props.isCheckList && (
            <IssueCount>
              {props.isCheckList.filter(isChecked => isChecked).length} selected
            </IssueCount>
          )}
          <FilteringConditions>
            {COLOUMN_LIST.map((columnName, index) => (
              <Details key={index}>
                <Condition>
                  {columnName}
                  <DropdownCaret />
                </Condition>
                <PopupContent type={columnName} />
              </Details>
            ))}
          </FilteringConditions>
        </HeaderWrapper>
      );
    }

    if (type === 'milestone') {
      return (
        <HeaderWrapper>
          <MilestoneIcon size={19} />
          <Open onClick={props.clickOpen} status={props.status}>
            <Count>{props.openTotalCount}</Count>
            <span>Open</span>
          </Open>
          <Closed onClick={props.clickClose} status={props.status}>
            <CheckIcon size={22} />
            <Count>{props.closeTotalCount}</Count>
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
  min-height: 25em;
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
  cursor: pointer;
  margin-left: 0.2em;
  margin-right: 1.3em;
  transform: translateY(1px);

  ${props => {
    if (!props.status) {
      return `font-weight: bold;`;
    }
    return ``;
  }}
`;
const Count = styled.span`
  margin-left: 0.3em;
  margin-right: 0.3em;
`;
const Closed = styled.span`
  cursor: pointer;
  transform: translateY(1px);
  ${props => {
    if (props.status) {
      return `font-weight: bold;`;
    }
    return ``;
  }}
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

const Details = styled.details`
  & > summary::-webkit-details-marker {
    display: none;
  }
`;

const IssueCount = styled.div`
  margin-left: 1rem;
`;

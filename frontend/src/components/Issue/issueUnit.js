import React from 'react';
import styled from 'styled-components';
import { MilestoneIcon, IssueOpenedIcon } from '@primer/octicons-react';

export default function IssueUnit({
  issueData,
  isCheckList,
  setIsCheckList,
  index,
  setIsAllChecked,
}) {
  const handleCheckbox = e => {
    let newCheckList = [...isCheckList];
    if (!e.target.checked) {
      setIsAllChecked(false);
    }
    newCheckList[index] = e.target.checked;

    setIsCheckList(newCheckList);
  };
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onClick={handleCheckbox}
        checked={isCheckList[index]}
      />
      <IssueIconWrapper>
        <IssueOpenedIcon size={18} />
      </IssueIconWrapper>
      <LeftContent>
        <LeftTopContent>
          <IssueTitle>{issueData.issue_name}</IssueTitle>
          {issueData.label_name.map(labelData => (
            <Labels>
              <Label color={labelData.color}>{labelData.label_name}</Label>
            </Labels>
          ))}
        </LeftTopContent>
        <LeftDownContent>
          <IssueInfo>
            #115 opened 12 hours ago by {issueData.nickname}
          </IssueInfo>
          <MilestoneInfo>
            <MilestoneIcon size={16} />
          </MilestoneInfo>
          <MilestoneTitle>{issueData.milestone_name}</MilestoneTitle>
        </LeftDownContent>
      </LeftContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1.5em;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`;

const IssueIconWrapper = styled.span`
  color: green;
`;
const Checkbox = styled.input`
  margin-right: 1.5em;
`;

const LeftContent = styled.div`
  margin-left: 0.5em;
  display: flex;
  flex-direction: column;
`;

const IssueTitle = styled.span`
  font-weight: bold;
  font-size: 1.1em;
`;

const Labels = styled.span`
  margin-left: 2em;
`;

const MilestoneInfo = styled.span`
  margin-left: 0.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const MilestoneTitle = styled.span`
  margin-left: 0.5em;
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const LeftTopContent = styled.div``;
const LeftDownContent = styled.div`
  display: flex;
  align-items: center;
`;

const IssueInfo = styled.div`
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.7);
`;

const Label = styled.span`
  display: inline-block;
  padding: 0.2em 1em;
  height: 1.5em;
  text-align: center;
  line-height: 1.3em;

  border-radius: 20px;
  ${props => {
    return `background-color:${props.color}`;
  }};
`;

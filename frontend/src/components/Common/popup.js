import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFetch } from '../../service/fetch';
import { v4 } from 'uuid';

export default function popup({ type, setIssueListData, issueListData }) {
  const [content, setContent] = useState([]);

  const onClickCancel = e => {
    e.target.closest('details').removeAttribute('open');
  };

  const getContents = async type => {
    if (type === 'Milestones' || type === 'milestone') {
      const openMilestone = await getFetch(
        `${process.env.SERVER_URL}/api/milestone/all/?status=0`,
      );

      const closeMilestone = await getFetch(
        `${process.env.SERVER_URL}/api/milestone/all/?status=1`,
      );

      const arr = [
        ...openMilestone.milestonesInfo.milestoneArray,
        ...closeMilestone.milestonesInfo.milestoneArray,
      ];
      setContent(arr);
    }

    if (type === 'Label' || type === 'label') {
      const allLabel = await getFetch(
        `${process.env.SERVER_URL}/api/label/all`,
      );

      setContent(allLabel.labels);
    }

    if (type === 'Assignee' || type === 'assignee') {
      const users = await getFetch(`${process.env.SERVER_URL}/api/user/all`);

      setContent(users.allUser);
    }
  };

  const getDomElements = type => {
    if (type === 'Milestones' || type === 'milestone') {
      return content.map(milestone => {
        return (
          <PopupContent key={v4()}>{milestone.milestone_name}</PopupContent>
        );
      });
    }

    if (type === 'Label' || type === 'label') {
      return content.map(label => {
        return (
          <PopupContent type="label" color={label.color} key={v4()}>
            {label.label_name}
          </PopupContent>
        );
      });
    }

    if (type === 'Assignee' || type === 'assignee') {
      return content.map(user => {
        return (
          <PopupContent key={v4()}>
            <ProfileImage src={user.profile_image_url} />
            {user.nickname}
          </PopupContent>
        );
      });
    }
  };

  const onClickOpenIssue = async () => {
    const filteringData = await getFetch(
      `${process.env.SERVER_URL}/api/issue/all?filter=open`,
    );
    setIssueListData({
      ...issueListData,
      issuesArray: filteringData.issuesInfo.issuesArray,
    });
  };

  const onClickCloseIssue = async () => {
    const filteringData = await getFetch(
      `${process.env.SERVER_URL}/api/issue/all?filter=close`,
    );

    setIssueListData({
      ...issueListData,
      issuesArray: filteringData.issuesInfo.issuesArray,
    });
  };

  useEffect(() => {
    getContents(type);
  }, []);

  return (
    <>
      <DetailMenu>
        <FilteringBox type={type}>
          {type === 'issue' ? (
            <Wrapper>
              <FilteringHeader role="button" aria-haspopup="menu">
                Fitler issues
                <PopupCancel onClick={onClickCancel}>x</PopupCancel>
              </FilteringHeader>
              <FilteringCondition onClick={onClickOpenIssue}>
                Open issues
              </FilteringCondition>
              <FilteringCondition>Your issues</FilteringCondition>
              <FilteringCondition>
                Everything assigned to you
              </FilteringCondition>
              <FilteringCondition>Everything mentioning you</FilteringCondition>
              <FilteringCondition onClick={onClickCloseIssue}>
                Closed issues
              </FilteringCondition>
            </Wrapper>
          ) : (
            <Wrapper>
              <FilteringHeader role="button" aria-haspopup="menu">
                Filter by {type}
                <PopupCancel onClick={onClickCancel}>x</PopupCancel>
              </FilteringHeader>
              <FilteringCondition>{getDomElements(type)}</FilteringCondition>
            </Wrapper>
          )}
        </FilteringBox>
      </DetailMenu>
    </>
  );
}

const ProfileImage = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

const PopupContent = styled.div`
  ${props => {
    if (props.type === 'label') {
      return `transform:translateX(120%);justify-content:center;text-align: center;width:30%;background-color:${props.color}; color:black;`;
    }
    return `width: 60%;`;
  }}

  padding: 1em;
  display: flex;
  gap: 2em;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 1em;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

const DetailMenu = styled.div`
  position: relative;
`;

const FilteringBox = styled.div`
  width: 20em;
  position: absolute;

  ${props => {
    if (props.type !== 'issue') {
      return 'right:0;';
    }
    return 'left:0;';
  }}

  top: 1em;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 20em;
  position: relative;
`;
const FilteringHeader = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
  background-color: white;
  z-index: 2;
  padding: 1em;
  font-weight: bold;
  font-size: 0.8em;
  display: flex;
`;

const PopupCancel = styled.div`
  width: 2em;
  height: 2em;
  line-height: 2em;
  position: absolute;
  right: 0;
  font-size: 1.5em;
  text-align: center;
  transform: translateY(-0.5em);
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    color: black;
  }
  cursor: pointer;
`;

const FilteringCondition = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  background-color: white;
  padding: 1em;
  font-size: 0.8em;
  z-index: 1;
`;

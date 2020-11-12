import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFetch } from '../../service/fetch';
import { v4 } from 'uuid';

export default function popup({ type }) {
  const [content, setContent] = useState([]);

  const onClickCancel = e => {
    e.target.closest('details').removeAttribute('open');
  };

  const getContents = async type => {
    if (type === 'Milestones') {
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
  };

  const getDomElements = type => {
    if (type === 'Milestones') {
      return content.map(milestone => {
        return <div key={v4()}>{milestone.milestone_name}</div>;
      });
    }
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
              <FilteringCondition>Open issues</FilteringCondition>
              <FilteringCondition>Your issues</FilteringCondition>
              <FilteringCondition>
                Everything assigned to you
              </FilteringCondition>
              <FilteringCondition>Everything mentioning you</FilteringCondition>
              <FilteringCondition>Closed issues</FilteringCondition>
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

  background-color: white;
  padding: 1em;
  font-size: 0.8em;
  z-index: 1;
`;

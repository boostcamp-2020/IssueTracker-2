import React, { useState } from 'react';
import styled from 'styled-components';

export default function popup({ type }) {
  const onClickCancel = e => {
    e.target.closest('details').removeAttribute('open');
  };

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
              <FilteringCondition>
                각 조건에 따른 데이터 배열형태로 생성해서 사용하기.
              </FilteringCondition>
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

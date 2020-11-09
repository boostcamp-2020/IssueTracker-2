import React from 'react';
import styled from 'styled-components';

export default function popup({ type }) {
  return (
    <>
      <DetailMenu>
        <FilteringBox type={type}>
          {type === 'issue' ? (
            <Wrapper>
              <FilteringHeader role="button" aria-haspopup="menu">
                Fitler issues
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

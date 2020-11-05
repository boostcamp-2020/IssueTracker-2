import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Wrapper>
      <OptionButtonsWrapper>
        <OptionButton borderRight="1px solid #aaaaaa">Label</OptionButton>
        <OptionButton>Milestones</OptionButton>
      </OptionButtonsWrapper>
      <AddLabelButton>New label</AddLabelButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

const AddLabelButton = styled.button`
  background-color: #4caf50;
  border: 1px solid;
  border-color: #1b1f231a;
  border-radius: 6px;
  color: white;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  cursor: pointer;
`;

const OptionButtonsWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid #aaaaaa;
`;

const OptionButton = styled.button`
  background: none;
  border: none;
  border-right: ${props => props.borderRight};
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
`;

import React from 'react';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';

export default function NavBar() {
  return (
    <Wrapper>
      <OptionButtonsWrapper>
        <OptionButton borderRight="1px solid #aaaaaa">Label</OptionButton>
        <OptionButton>Milestones</OptionButton>
      </OptionButtonsWrapper>
      <CreateButton content="New label" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
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

import React from 'react';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';
import NavigationButton from '../Common/NavButton';

export default function NavBar() {
  return (
    <Wrapper>
      <NavigationButton />
      <ButtonWrapper>
        <CreateButton content="New label" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

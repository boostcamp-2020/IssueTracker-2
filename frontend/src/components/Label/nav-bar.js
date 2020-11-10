import React from 'react';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';
import NavigationButton from '../Common/NavButton';

export default function NavBar({ isAddTab, setIsAddTab }) {
  const handleCreateButton = () => {
    setIsAddTab(!isAddTab);
    console.log('Hello');
  };
  return (
    <Wrapper>
      <NavigationButton type="label" />
      <ButtonWrapper>
        <CreateButton onClick={handleCreateButton} content="New label" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 3em 0;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

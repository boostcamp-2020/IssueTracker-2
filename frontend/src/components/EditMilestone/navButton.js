import React from 'react';
import styled from 'styled-components';
import NavigationButton from '../Common/NavButton';

export default function NavButton(props) {
  return (
    <Nav>
      <NavigationButton />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 80%;
  margin: auto;
  padding: 2em 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

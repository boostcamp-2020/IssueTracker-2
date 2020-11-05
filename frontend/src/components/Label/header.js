import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return <Wrapper>ISSUES</Wrapper>;
}

const Wrapper = styled.div`
  background: black;
  color: white;
  text-align: center;
  padding: 30px;
  font-size: 30px;
`;

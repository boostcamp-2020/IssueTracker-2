import React from 'react';
import styled from 'styled-components';

export default function NavBar() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  margin: 0 auto;
`;

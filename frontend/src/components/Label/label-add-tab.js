import React from 'react';
import styled from 'styled-components';

export default function LabelAddTabl() {
  return (
    <Wrapper>
      <Header />
      <InputList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  padding: 10px;
  background: #eeeeee;
  margin: 20px 0;
`;

const Header = styled.div``;

const InputList = styled.div``;

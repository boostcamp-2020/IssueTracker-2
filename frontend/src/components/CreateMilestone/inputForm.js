import React from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';

export default function InputForm(props) {
  return (
    <Wrapper>
      <InputTitle />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

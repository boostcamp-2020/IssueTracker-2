import React from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';

export default function InputForm(props) {
  return (
    <Wrapper>
      <InputTitle />
      <InputDueDate />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

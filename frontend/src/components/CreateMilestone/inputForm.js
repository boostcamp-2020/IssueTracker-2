import React from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';
import InputDescription from './inputDescription';

export default function InputForm(props) {
  return (
    <>
      <Wrapper>
        <InputTitle />
        <InputDueDate />
        <InputDescription />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

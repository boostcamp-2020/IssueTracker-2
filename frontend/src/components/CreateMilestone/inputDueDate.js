import React, { useContext } from 'react';
import styled from 'styled-components';
export default function InputDueDate({ SetDueDateContext }) {
  const setDueDate = useContext(SetDueDateContext);
  const onChange = e => {
    setDueDate(e.target.value);
  };

  return (
    <Wrapper>
      <DueDate>Due Date(optional)</DueDate>
      <DueDateInput type="date" onChange={onChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em 0;
`;

const DueDate = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
`;
const DueDateInput = styled.input`
  width: 40%;
  height: 3em;
  padding: 0 1em;
  border: 1px solid #e1e4e8;
  font-size: 1em;
  border-radius: 5px;
  background-color: #fafbfc;
`;

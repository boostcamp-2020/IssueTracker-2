import React from 'react';
import styled from 'styled-components';

export default function CreateButton(props) {
  return (
    <Wrapper>
      <Button>Create milestone</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 1.5em;
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  right: 0;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
`;

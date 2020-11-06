import React from 'react';
import styled from 'styled-components';
export default function NormalButton(props) {
  return <Button>{props.content}</Button>;
}

const Button = styled.button`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  color: black;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
`;

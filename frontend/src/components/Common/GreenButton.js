import React from 'react';
import styled from 'styled-components';

export default function CreateButton({ content }) {
  return <Button>{content}</Button>;
}

const Button = styled.button`
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  color: white;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`;

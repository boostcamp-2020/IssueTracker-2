import React from 'react';
import styled from 'styled-components';

export default function DropdownCaret(props) {
  return <Caret />;
}

const Caret = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

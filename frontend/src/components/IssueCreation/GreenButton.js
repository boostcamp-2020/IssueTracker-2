import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {

  return (
    <SubmitButton>Submit new issue</SubmitButton>
  );
}

const SubmitButton = styled.button`
  background-color: #2ea44f;
  border: 1px solid;
  border-color: #1b1f2326;
  border-radius: 6px;
  color: white;
  margin-left: auto;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  cursor: pointer;
`;

const Disabled = styled.button`
    opacity: 0.6;
    cursor: not-allowed;
`;


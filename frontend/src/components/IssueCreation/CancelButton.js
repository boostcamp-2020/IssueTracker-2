import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return <TextButton>Cancel</TextButton>;
};

const TextButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
`;

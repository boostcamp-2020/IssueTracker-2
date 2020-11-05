import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Tab>
      <WriteButton>Write</WriteButton>
    </Tab>
  );
};

const Tab = styled.div`
  margin: 8px 8px -1px 8px;
`;

const WriteButton = styled.button`
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-bottom: 1px solid white;
  border-radius: 6px 6px 0 0;
  padding: 10px 16px;
  z-index: 1;
  outline: none;
`;

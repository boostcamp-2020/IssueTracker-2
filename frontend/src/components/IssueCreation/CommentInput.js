import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return <Input placeholder="Leave a comment" />;
};

const Input = styled.textarea`
  height: 100%;
  padding: 8px 12px;
  margin: 8px;
  margin-bottom: -3px;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  outline: none;
  font-size: 14px;
  background-color: #f6f8fa;
`;

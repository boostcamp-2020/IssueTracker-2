import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return <Input placeholder="Leave a comment" />;
};

const Input = styled.textarea`
  width: 100%;
  height: 100%;
  margin-bottom: -3px;
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-bottom: none;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  outline: none;
  font-size: 14px;
  background-color: #f6f8fa;
`;

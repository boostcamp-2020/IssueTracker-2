import React, { useState } from 'react';
import styled from 'styled-components';

export default ({ tabType, setTabType }) => {
  return (
    <Tab>
      <WriteButton tabType={tabType} onClick={() => setTabType('write')}>
        Write
      </WriteButton>
      <PreviewButton tabType={tabType} onClick={() => setTabType('preview')}>
        Preview
      </PreviewButton>
    </Tab>
  );
};

const Tab = styled.div`
  margin: 8px 8px -1px 8px;
`;

const WriteButton = styled.button`
  background-color: #fff;
  ${props => {
    if (props.tabType === 'write') {
      return 'border: 1px solid #e1e4e8; border-bottom: 1px solid white; border-radius: 6px 6px 0 0;';
    }
    return 'border:none;';
  }}

  padding: 10px 16px;
  z-index: 1;
  outline: none;
  cursor: pointer;
`;

const PreviewButton = styled.button`
  background-color: #fff;
  ${props => {
    if (props.tabType === 'preview') {
      return 'border: 1px solid #e1e4e8; border-bottom: 1px solid white; border-radius: 6px 6px 0 0;';
    }
    return 'border:none;';
  }}

  padding: 10px 16px;
  z-index: 1;
  outline: none;
  cursor: pointer;
`;

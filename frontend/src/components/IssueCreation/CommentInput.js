import React, { useState } from 'react';
import styled from 'styled-components';
import MarkdownEditor from '../Common/MarkdownEditor';

export default ({ tabType, setContent, content }) => {
  const onChange = e => {
    setContent(e.target.value);
  };

  return (
    <>
      {tabType === 'write' && (
        <Input
          placeholder="Leave a comment"
          value={content}
          onChange={onChange}
        />
      )}
      {tabType === 'preview' && (
        <MarkdownContent>
          <MarkdownEditor content={content} />
        </MarkdownContent>
      )}
    </>
  );
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

const MarkdownContent = styled.div`
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
  background-color: white;
  overflow-y: scroll;
`;

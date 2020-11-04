import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <TextArea>
      <CommentInput placeholder="Leave a comment" />

      <FileAttachMessage>
        Attach files by dragging & droppping, selecting or pasting then.
      </FileAttachMessage>
    </TextArea>
  );
};

const TextArea = styled.div`
  height: 200px;
  margin-top: 20px;
`;

const CommentInput = styled.textarea`
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

const FileAttachMessage = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-top: 1px dashed #e1e4e8;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 5px;
  font-size: 14px;
  color: #586069;
`;

import React from 'react';
import styled from 'styled-components';

import IssueTitle from './IssueTitle';
import Tab from './Tab';
import CommentInput from './CommentInput';
import SubmitButton from './SubmitButton';
import CancelButton from './CancelButton';

export default () => {
  return (
    <Form>
      <IssueTitle />
      <Tab />
      <Line />
      <CommentInput />
      <FileAttachMessage>
        Attach files by dragging & droppping, selecting or pasting then.
      </FileAttachMessage>
      <ButtonWrap>
        <CancelButton />
        <SubmitButton />
      </ButtonWrap>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e4e8;
  height: 430px;
  border-radius: 6px;
`;

const Line = styled.div`
  border-top: 1px solid #e1e4e8;
  z-index: -1;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin: 8px;
  margin-top: 0;
`;

const FileAttachMessage = styled.div`
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-top: 1px dashed #e1e4e8;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 5px;
  margin: 8px;
  margin-top: 0px;
  font-size: 14px;
  color: #586069;
`;

import React from 'react';
import styled from 'styled-components';
import { SmileyIcon } from '@primer/octicons-react';
import MarkdownEditor from '../Common/MarkdownEditor';

export default function comment({ issueInfo }) {
  return (
    <Wrapper>
      <CommentHeader>
        <CommentAuthor>{issueInfo.nickname}</CommentAuthor>
        <CommentWritenTime>
          commented 1 {issueInfo.created_at.substring(0, 10)}
        </CommentWritenTime>
        <RightContent>
          <Role>Member</Role>
          <SmileyIcon size={16} />
          <span>Edit</span>
        </RightContent>
      </CommentHeader>
      <CommentDesc>
        <MarkdownEditor content={issueInfo.issue_content} />
      </CommentDesc>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CommentHeader = styled.div`
  width: 100%;
  padding: 1em;
  background-color: #f1f8ff;
  border: 1px solid #9cc3e8;
  border-radius: 5px 5px 0 0;
  display: flex;
  gap: 2em;
  position: relative;
`;
const CommentAuthor = styled.span`
  font-weight: bold;
`;
const CommentWritenTime = styled.span`
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.6);
`;
const RightContent = styled.span`
  position: absolute;
  display: flex;
  gap: 2em;
  right: 1em;
`;

const Role = styled.div`
  padding: 0.2em 1em;
  border: 1px solid #9cc3e8;
  transform: translateY(-0.2em);
  border-radius: 20px;
`;

const CommentDesc = styled.div`
  width: 100%;
  border-left: 1px solid #9cc3e8;
  border-right: 1px solid #9cc3e8;
  border-bottom: 1px solid #9cc3e8;
  border-radius: 0 0 5px 5px;
  padding: 2em 1em;
`;

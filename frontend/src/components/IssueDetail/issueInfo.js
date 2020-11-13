import React from 'react';
import styled from 'styled-components';
import { BookmarkIcon } from '@primer/octicons-react';
import EditButton from '../Common/NormalButton';

export default function IssueInfo({ issueInfo }) {
  return (
    <Wrapper>
      <IssueInfoHeader>
        <IssueTitle>{issueInfo.issue_name}</IssueTitle>
        <IssueNumber>#{issueInfo.id}</IssueNumber>
        <BookmarkIconWrap>
          <BookmarkIcon size={16} />
        </BookmarkIconWrap>
      </IssueInfoHeader>
      <IssueInfoDescription>
        <span>{issueInfo.issue_status === 0 ? 'Open' : 'Close'}</span>
        <span>msmk530</span>
        <span>
          opended this issue at {issueInfo.created_at.substring(0, 10)}
        </span>
        <span>1 comments</span>
      </IssueInfoDescription>
      <EditBtn>
        <EditButton content="Edit" />
      </EditBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  padding: 3em 0;
  position: relative;
`;

const IssueInfoHeader = styled.div`
  display: flex;
  gap: 1em;
`;

const IssueTitle = styled.div`
  font-size: 2em;
`;

const IssueNumber = styled.div`
  font-size: 2em;
  color: rgba(0, 0, 0, 0.7);
`;

const BookmarkIconWrap = styled.span`
  color: rgba(255, 152, 56, 0.5);
  text-align: center;
  line-height: 2em;
  &:hover {
    color: rgba(255, 152, 56);
  }
  cursor: pointer;
`;

const IssueInfoDescription = styled.div`
  padding: 2em 0;
  display: flex;
  gap: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const EditBtn = styled.span`
  position: absolute;
  top: 3em;
  right: 0;
`;

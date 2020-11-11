import React from 'react';
import Header from '../../components/Common/Header';
import Navigation from '../../components/Issue/navigation';
import IssueList from '../../components/Issue/issueList';
import Footer from '../../components/Common/Footer';
import { useHistory } from 'react-router-dom';

const ISSUE_LIST_DATA = [
  {
    id: 0,
    user_sid: 0,
    issue_title: '1번 이슈',
    issue_author: 'string',
    comment: 'string',
    label: 0,
    milestone: 0,
    issue_status: true,
    assignee: 0,
  },
  {
    id: 1,
    user_sid: 1,
    issue_title: '2번 이슈',
    issue_author: 'string',
    comment: 'string',
    label: 0,
    milestone: 0,
    issue_status: true,
    assignee: 0,
  },
  {
    id: 1,
    user_sid: 1,
    issue_title: '3번 이슈',
    issue_author: 'string',
    comment: 'string',
    label: 0,
    milestone: 0,
    issue_status: false,
    assignee: 0,
  },
];

const Issue = () => {
  const historyState = useHistory().location.state;

  return (
    <>
      <Header />
      <Navigation />
      <IssueList ISSUE_LIST_DATA={ISSUE_LIST_DATA} />
      <Footer />
    </>
  );
};

export default Issue;

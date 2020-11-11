import React from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';

const ISSUE_LIST_DATA = [
  {
    id: 0,
    user_sid: 0,
    issue_title: 'string',
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
    issue_title: 'string',
    issue_author: 'string',
    comment: 'string',
    label: 0,
    milestone: 0,
    issue_status: true,
    assignee: 0,
  },
];

export default function IssueList(props) {
  return (
    <>
      <ListForm
        content={ISSUE_LIST_DATA.map(() => (
          <IssueUnit />
        ))}
        type="issue"
      ></ListForm>
    </>
  );
}

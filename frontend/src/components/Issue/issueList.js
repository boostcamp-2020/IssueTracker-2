import React from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';

export default function IssueList({ ISSUE_LIST_DATA }) {
  return (
    <>
      <ListForm
        ISSUE_LIST_DATA={ISSUE_LIST_DATA}
        content={ISSUE_LIST_DATA.map(issueData => (
          <IssueUnit issueData={issueData} />
        ))}
        type="issue"
      ></ListForm>
    </>
  );
}

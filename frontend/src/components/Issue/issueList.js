import React from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';

export default function IssueList({ issueListData }) {
  return (
    <>
      <ListForm
        issueListData={issueListData}
        content={issueListData.map(issueData => (
          <IssueUnit issueData={issueData} />
        ))}
        type="issue"
      ></ListForm>
    </>
  );
}

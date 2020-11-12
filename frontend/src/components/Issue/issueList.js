import React from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';
import { v4 } from 'uuid';

export default function IssueList({ issueListData }) {
  return (
    <>
      <ListForm
        issueListData={issueListData}
        content={issueListData.map(issueData => (
          <IssueUnit key={v4()} issueData={issueData} />
        ))}
        type="issue"
      ></ListForm>
    </>
  );
}

import React from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';

export default function IssueList(props) {
  return (
    <>
      <ListForm content={<IssueUnit />} type="issue" />
    </>
  );
}

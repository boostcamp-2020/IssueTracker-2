import React, { useState, useEffect } from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';
import { v4 } from 'uuid';

const IssueList = ({
  issueListData,
  setIssueFilter,
  issueFilter,
  issueCount,
}) => {
  const [isCheckList, setIsCheckList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsCheckList(new Array(issueListData.length).fill(false));
  }, [issueListData]);

  console.log(issueListData);

  return (
    <>
      <ListForm
        issueCount={issueCount}
        isCheckList={isCheckList}
        setIsCheckList={setIsCheckList}
        issueListData={issueListData}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        issueFilter={issueFilter}
        setIssueFilter={setIssueFilter}
        content={issueListData.map((issueData, index) => (
          <IssueUnit
            key={v4()}
            index={index}
            isCheckList={isCheckList}
            setIsCheckList={setIsCheckList}
            issueData={issueData}
            setIsAllChecked={setIsAllChecked}
          />
        ))}
        type="issue"
      ></ListForm>
    </>
  );
};

export default IssueList;

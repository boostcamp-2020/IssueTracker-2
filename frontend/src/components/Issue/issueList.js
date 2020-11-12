import React, { useState, useEffect } from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';
import { v4 } from 'uuid';

const IssueList = ({ issueListData }) => {
  const [isCheckList, setIsCheckList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  useEffect(() => {
    setIsCheckList(new Array(issueListData.length).fill(false));
  }, [issueListData]);

  return (
    <>
      <ListForm
        isCheckList={isCheckList}
        setIsCheckList={setIsCheckList}
        issueListData={issueListData}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
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

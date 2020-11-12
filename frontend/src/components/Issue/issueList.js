import React, { useState, useEffect } from 'react';
import ListForm from '../Common/ListForm';
import IssueUnit from './issueUnit';
import { v4 } from 'uuid';

const IssueList = ({ issueListData, setIssueFilter }) => {
  const [isCheckList, setIsCheckList] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsCheckList(new Array(issueListData.length).fill(false));
  }, [issueListData]);

  const sortLabelByIssue = issueListData => {
    let sortedIssue = [];
    let issueLabelMap = {};
    issueListData.forEach(issueData => {
      if (issueLabelMap[issueData.id] === undefined) {
        issueLabelMap[issueData.id] = sortedIssue.length;
        sortedIssue.push({
          ...issueData,
          label_name: [
            { label_name: issueData.label_name, color: issueData.color },
          ],
        });
        return;
      }
      let issueIndex = issueLabelMap[issueData.id];
      sortedIssue[issueIndex].label_name.push({
        label_name: issueData.label_name,
        color: issueData.color,
      });
    });

    return sortedIssue;
  };
  console.log(sortLabelByIssue(issueListData));

  return (
    <>
      <ListForm
        isCheckList={isCheckList}
        setIsCheckList={setIsCheckList}
        issueListData={issueListData}
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
        setIssueFilter={setIssueFilter}
        content={sortLabelByIssue(issueListData).map((issueData, index) => (
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

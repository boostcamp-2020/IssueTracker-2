import React, { useEffect, useState } from 'react';
import Header from '../../components/Common/Header';
import Navigation from '../../components/Issue/navigation';
import IssueList from '../../components/Issue/issueList';
import Footer from '../../components/Common/Footer';

import { getFetch } from '../../service/fetch';
import { useHistory } from 'react-router-dom';

const Issue = () => {
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }

  const [issueListData, setIssueListData] = useState({
    milestoneCount: 0,
    labelCount: 0,
    issuesArray: [],
  });

  const [issueFilter, setIssueFilter] = useState(0);
  const [issueCount, setIssueCount] = useState({ open: 0, close: 0 });

  const getIssueCount = () => {
    getFetch(process.env.SERVER_URL + '/api/issue/all').then(res => {
      let issueAll = sortLabelByIssue(res.issuesInfo.issuesArray);

      setIssueCount({
        open: issueAll.filter(issueData => issueData.issue_status).length,
        close: issueAll.filter(issueData => !issueData.issue_status).length,
      });
    });
  };

  const getIssueListData = () => {
    getFetch(process.env.SERVER_URL + '/api/issue/all').then(res => {
      setIssueListData(res.issuesInfo);
    });
  };

  const getIssueListOpenData = () => {
    getFetch(process.env.SERVER_URL + '/api/issue/all?filter=open').then(
      res => {
        setIssueListData(res.issuesInfo);
      },
    );
  };

  const getIssueListCloseData = () => {
    getFetch(process.env.SERVER_URL + '/api/issue/all?filter=close').then(
      res => {
        setIssueListData(res.issuesInfo);
      },
    );
  };

  useEffect(() => {
    getIssueCount();
    switch (issueFilter) {
      case 0:
        getIssueListData();
        return;
      case 1:
        getIssueListOpenData();
        return;
      case 2:
        getIssueListCloseData();
        return;
    }
  }, [issueFilter]);

  const sortLabelByIssue = issueList => {
    let sortedIssue = [];
    let issueLabelMap = {};
    issueList.forEach(issueData => {
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

  return (
    <>
      <Header />
      <Navigation
        issueListData={issueListData}
        setIssueListData={setIssueListData}
        countInfo={issueListData}
      />
      <IssueList
        issueFilter={issueFilter}
        issueListData={sortLabelByIssue(issueListData.issuesArray)}
        setIssueFilter={setIssueFilter}
        issueCount={issueCount}
      />
      <Footer />
    </>
  );
};

export default Issue;

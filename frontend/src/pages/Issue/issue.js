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

  const getIssueListData = () => {
    getFetch(process.env.SERVER_URL + '/api/issue/all').then(res => {
      setIssueListData(res.issuesInfo);
      console.log(res.issuesInfo);
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

  const sortLabelByIssue = issueListData => {
    let sortedIssue = [];
    let issueLabelMap = {};
    issueListData.forEach(issueData => {
      if (!issueLabelMap[issueData.id]) {
        issueLabelMap[issueData.id] = sortedIssue.length;
        sortedIssue.push({ ...issueData, label_name: [issueData.label_name] });
        return;
      }
      let issueIndex = issueLabelMap[issueData.id];
      sortedIssue[issueIndex].label_name.push(issueData.label_name);
    });
    return sortedIssue;
  };

  useEffect(() => {
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

  return (
    <>
      <Header />
      <Navigation countInfo={issueListData} />
      <IssueList
        issueListData={issueListData.issuesArray}
        setIssueFilter={setIssueFilter}
      />
      <Footer />
    </>
  );
};

export default Issue;

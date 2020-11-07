import React from 'react';
import Header from '../../components/Common/Header';
import Navigation from '../../components/Issue/navigation';
import IssueList from '../../components/Issue/issueList';
import Footer from '../../components/Common/Footer';

const Issue = props => {
  return (
    <>
      <Header />
      <Navigation />
      <IssueList />
      <Footer />
    </>
  );
};

export default Issue;

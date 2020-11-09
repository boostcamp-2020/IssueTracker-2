import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import IssueInfo from '../../components/IssueDetail/issueInfo';

const IssueDetail = props => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <IssueInfo issueNumber={id} />
      <Footer />
    </>
  );
};

export default IssueDetail;

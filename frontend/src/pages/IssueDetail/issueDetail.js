import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import IssueInfo from '../../components/IssueDetail/issueInfo';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';

const IssueDetail = props => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <IssueInfo issueNumber={id} />
      <IssueCreationBody>
        <WriteArea>
          <Profile />
          <CommentForm />
        </WriteArea>
        <SelectArea>
          <Sidebar />
          <Sidebar />
          <Sidebar />
        </SelectArea>
      </IssueCreationBody>
      <Footer />
    </>
  );
};

const IssueCreationBody = styled.div`
  width: 90%;
  display: flex;

  height: 700px;
  margin: auto;
`;

const WriteArea = styled.div`
  display: flex;
  width: 100%;
`;

const SelectArea = styled.div`
  margin-left: 20px;
`;

export default IssueDetail;

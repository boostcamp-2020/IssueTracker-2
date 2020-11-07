import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Common/Header';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';
import Footer from '../../components/Common/Footer';

const IssueCreation = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

const IssueCreationBody = styled.div`
  display: flex;
  width: 1200px;
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

export default IssueCreation;

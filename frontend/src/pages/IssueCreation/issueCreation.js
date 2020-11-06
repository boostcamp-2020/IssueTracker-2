import React from 'react';
import styled from 'styled-components';
import Header from '../../components/CreateMilestone/header';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';

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
  margin-top: 5em;
`;

const SelectArea = styled.div`
  margin-left: 20px;
  margin-top: 5em;
`;

export default IssueCreation;

import React from 'react';
import styled from 'styled-components';

import CommentForm from '../components/IssueCreation/CommentForm';
import Sidebar from '../components/IssueCreation/Sidebar';
import Profile from '../components/IssueCreation/Profile';

const IssueCreation = () => {
  return (
    <div>
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
`;

const SelectArea = styled.div`
  margin-left: 20px;
`;

export default IssueCreation;

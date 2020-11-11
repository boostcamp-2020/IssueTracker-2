import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Common/Header';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';
import Footer from '../../components/Common/Footer';
import jwt_decode from 'jwt-decode';

const IssueCreation = () => {
  const token = document.cookie.replace('jwt=', '');
  const user = jwt_decode(token);

  const [userInfo, setUserInfo] = useState({
    id: user.id,
    nickname: user.nickname,
    profile: user.profile,
  });

  return (
    <div>
      <Header />
      <IssueCreationBody>
        <WriteArea>
          <Profile profile={userInfo.profile} />
          <CommentForm
            userInfo={{ nickname: userInfo.nickname, id: userInfo.id }}
          />
        </WriteArea>
        <SelectArea>
          <Sidebar type="assignee" />
          <Sidebar type="label" />
          <Sidebar type="milestone" />
        </SelectArea>
      </IssueCreationBody>
      <Footer />
    </div>
  );
};

const IssueCreationBody = styled.div`
  width: 90%;
  display: flex;
  padding: 3em 0;
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

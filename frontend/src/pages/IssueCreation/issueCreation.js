import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/Common/Header';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';
import Footer from '../../components/Common/Footer';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const IssueCreation = () => {
  const token = document.cookie.replace('jwt=', '');
  const user = jwt_decode(token);

  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }

  const [userInfo, setUserInfo] = useState({
    id: user.id,
    nickname: user.nickname,
    profile: user.profile,
  });

  const [assignees, setAssignees] = useState([]);
  const [labels, setLabels] = useState(['None yet']);
  const [milestone, setMilestone] = useState('');

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
          <Sidebar setData={setAssignees} type="assignee" />
          <Sidebar data={labels} setData={setLabels} type="label" />
          <Sidebar setData={setMilestone} type="milestone" />
        </SelectArea>
      </IssueCreationBody>
      <Footer />
    </div>
  );
};

const IssueCreationBody = styled.div`
  width: 80%;
  display: flex;
  padding: 5em 0;
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

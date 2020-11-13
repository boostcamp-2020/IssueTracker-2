import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header';
import IssueInfo from '../../components/IssueDetail/issueInfo';
import CommentForm from '../../components/IssueCreation/CommentForm';
import Sidebar from '../../components/IssueCreation/Sidebar';
import Profile from '../../components/IssueCreation/Profile';
import Comments from '../../components/IssueDetail/comment';
import { useHistory } from 'react-router-dom';

const IssueDetail = props => {
  const { id } = useParams();
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }
  const issueInfo = history.location.state;
  console.log(issueInfo);
  return (
    <>
      <Header />
      <IssueInfo issueInfo={issueInfo} />
      <CommentBody>
        <IssueCommentWrap>
          <Comment>
            <Profile profile={issueInfo.profile_image_url} />
            <Comments issueInfo={issueInfo} />
          </Comment>
          <WriteArea>
            <Profile />
            <CommentForm userInfo={issueInfo.profile_image_url} />
          </WriteArea>
        </IssueCommentWrap>
        <SelectArea>
          <Sidebar />
          <Sidebar />
          <Sidebar />
        </SelectArea>
      </CommentBody>
      <Footer />
    </>
  );
};

const CommentBody = styled.div`
  width: 80%;
  display: flex;
  height: 700px;
  margin: auto;
`;
const IssueCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const Comment = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
`;
const WriteArea = styled.div`
  margin-top: 2em;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 2em 0;
  display: flex;
  width: 100%;
`;

const SelectArea = styled.div`
  margin-left: 20px;
`;

export default IssueDetail;

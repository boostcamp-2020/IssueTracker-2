import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserManagementButtons from '../../components/Login/userManagementButtons';
import UserInput from '../../components/Login/userInput';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const user = document.cookie.includes('user');
  const [userLoginInfo, setUserLoginInfo] = useState({ id: null, pw: null });

  const goToMain = () => {
    history.push('/milestones');
  };

  useEffect(() => {
    return user && goToMain();
  });
  return (
    <Wrapper>
      <Title>이슈 트래커</Title>
      <Content>
        <UserInput
          userLoginInfo={userLoginInfo}
          setUserLoginInfo={setUserLoginInfo}
        />
        <UserManagementButtons
          userLoginInfo={userLoginInfo}
          setUserLoginInfo={setUserLoginInfo}
        />
      </Content>
    </Wrapper>
  );
};

const BACKGROUND_GREY = '#eeeeee';
const BORDER_GREY = '#aaaaaa';

const Wrapper = styled.div`
  padding-top: 200px;
  background-color: ${BACKGROUND_GREY};
  height: 100vh;
`;

const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-weight: bold;
  font-size: 2.8em;
  margin-bottom: 30px;
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  background: white;
  width: 450px;
  padding: 35px 25px;
  border-radius: 10px;
  border: 1px solid ${BORDER_GREY};
`;

export default Login;

import React, { useState } from 'react';
import styled from 'styled-components';
import UserManagementButtons from './userManagementButtons';
import UserInput from './userInput';

const BACKGROUND_GREY = '#eeeeee';
const BORDER_GREY = '#aaaaaa';

export default function Login() {
  const [userLoginInfo, setUserLoginInfo] = useState({ id: null, pw: null });

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
}

const Wrapper = styled.div`
  padding-top: 200px;
  background-color: ${BACKGROUND_GREY};
  height: 100vh;
`;

const Title = styled.h1`
  width: fit-content;
  margin: 0 auto;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
`;

const Content = styled.div`
  width: fit-content;
  margin: 0 auto;
  background: white;
  width: 450px;
  padding: 30px 25px;
  border-radius: 10px;
  border: 1px solid ${BORDER_GREY};
`;

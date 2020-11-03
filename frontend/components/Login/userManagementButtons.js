import React from 'react';
import styled from 'styled-components';

export default function UserManagementButtons(props) {
  const onClick = () => {
    location.href = 'http://localhost:3000/auth/github';
  };

  return (
    <>
      <ContentNav>
        <ContentButton>로그인</ContentButton>
        <ContentButton>회원가입</ContentButton>
      </ContentNav>
      <GithubLoginButton type="button" onClick={onClick}>
        Sign in with GitHub
        <GithubLogo className="fab fa-github" />
      </GithubLoginButton>
    </>
  );
}

const ContentNav = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ContentButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  outline: none;
  color: blue;
  font-size: 1em;
  font-family: 'Nanum Gothic', sans-serif;
`;

const GithubLogo = styled.i`
  margin-left: 0.5em;
  font-size: 1.2em;
  color: black;
`;

const GithubLoginButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 2em;
  font-size: 1.5em;
  color: white;
  line-height: 2em;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-top: 1em;
  outline: none;
  font-family: 'Roboto', sans-serif;
`;

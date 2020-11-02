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
  margin-top: 2em;
`;

const ContentButton = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  outline: none;
  color: blue;
  font-size: 1em;
`;

const GithubLogo = styled.i`
  margin-left: 1em;
`;

const GithubLoginButton = styled.button`
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  margin-top: 1.5em;
  outline: none;
`;

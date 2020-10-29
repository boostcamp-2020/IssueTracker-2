import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: blue;
`;
const Login = () => {
  const onClick = () => {
    fetch('http://localhost:3000/auth/github', {
      method: 'GET',
    });
  };

  return (
    <>
      <Title>LOGIN</Title>
      <a href="http://localhost:3000/auth/github">go2</a>
      <button type="button" onClick={onClick}>
        Github Login
      </button>
    </>
  );
};

export default Login;

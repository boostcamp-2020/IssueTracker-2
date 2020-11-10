import React from 'react';
import styled from 'styled-components';
import { RepoIcon } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';
export default function Header() {
  const history = useHistory();
  const onClickHeader = () => {
    history.push('/issues');
  };
  return (
    <>
      <Title>
        <RepoIcon size={24} />
        <Text onClick={onClickHeader}>ISSUE</Text>
        <LogoutButton>Logout</LogoutButton>
      </Title>
    </>
  );
}

const Title = styled.header`
  position: relative;
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  text-align: center;
  line-height: 5rem;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.span`
  margin-left: 0.2em;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  position: absolute;
  bottom: 0.5em;
  right: 4em;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 0.7em;
  cursor: pointer;
`;

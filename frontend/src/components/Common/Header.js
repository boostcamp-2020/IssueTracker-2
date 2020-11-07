import React from 'react';
import styled from 'styled-components';
import { RepoIcon } from '@primer/octicons-react';
export default function Header() {
  return (
    <Title>
      <RepoIcon size={24} />
      <Text>ISSUE</Text>
    </Title>
  );
}

const Title = styled.header`
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
`;

import React from 'react';
import styled from 'styled-components';

export default function Explanation(props) {
  return (
    <Wrapper>
      <Title>New milestone</Title>
      <Description>
        Create a new milestone to help organize your issues and pull requests.
        Learn more about <LinkToInfo>milestones and issue.</LinkToInfo>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  padding: 1em 0;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-size: 2em;
`;

const Description = styled.span``;

const LinkToInfo = styled.a`
  color: #0366d6;
  text-decoration: none;
  cursor: pointer;
`;

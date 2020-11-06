import React from 'react';
import styled from 'styled-components';

export default function Footer(props) {
  return (
    <Wrapper>
      <GithubIcon className="fab fa-github" />
      <FooterMessage>
        @ 2020 Pastel, INC.
        <LinkToInfo>Terms</LinkToInfo>
        <LinkToInfo>Privacy</LinkToInfo>
        <LinkToInfo>Security</LinkToInfo>
        <LinkToInfo>Status</LinkToInfo>
        <LinkToInfo>Help</LinkToInfo>
        <LinkToInfo>Contact GitHub</LinkToInfo>
        <LinkToInfo>Pricing</LinkToInfo>
        <LinkToInfo>API</LinkToInfo>
        <LinkToInfo>Training</LinkToInfo>
        <LinkToInfo>Blog</LinkToInfo>
        <LinkToInfo>About</LinkToInfo>
      </FooterMessage>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 4em;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1.5em 0;
`;

const GithubIcon = styled.i`
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.3);
`;

const FooterMessage = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.7);
`;

const LinkToInfo = styled.a`
  color: #0366d6;
  margin-left: 0.5em;
  text-decoration: none;
  cursor: pointer;
`;

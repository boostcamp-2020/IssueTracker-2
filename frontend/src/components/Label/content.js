import React from 'react';
import styled from 'styled-components';
import NavBar from './nav-bar';
import LabelList from './label-list';
import LabelAddTab from './label-add-tab';

export default function Content() {
  return (
    <ContentContainer>
      <Wrapper>
        <NavBar />
        <LabelAddTab />
        <LabelList />
      </Wrapper>
    </ContentContainer>
  );
}

const Wrapper = styled.div``;

const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 30px;
`;

import React from 'react';
import styled from 'styled-components';
import NavBar from './nav-bar';
import LabelList from './label-list';
import LabelAddTab from './label-add-tab';

export default function Content() {
  return (
    <ContentContainer>
      <NavBar />
      <LabelAddTab />
      <LabelList />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
`;

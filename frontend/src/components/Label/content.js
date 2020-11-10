import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './nav-bar';
import LabelList from './label-list';
import LabelAddTab from './label-add-tab';

export default function Content() {
  const [isAddTab, setIsAddTab] = useState(false);

  return (
    <>
      <ContentContainer>
        <Wrapper>
          <NavBar {...{ isAddTab, setIsAddTab }} />
          {isAddTab && <LabelAddTab setIsAddTab={setIsAddTab} />}
        </Wrapper>
      </ContentContainer>
      <LabelList />
    </>
  );
}

const Wrapper = styled.div``;

const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
`;

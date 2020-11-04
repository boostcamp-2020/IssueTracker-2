import React from 'react';
import styled from 'styled-components';

export default function LabelList() {
  return (
    <Wrapper>
      <ContentHeader>label</ContentHeader>
      <LabelDescriptionList></LabelDescriptionList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const ContentHeader = styled.div`
  padding: 20px 16px;
  background: #eeeeee;
`;
const LabelDescriptionList = styled.div``;

const LabelDescription = styled.div``;

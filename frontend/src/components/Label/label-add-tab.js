import React from 'react';
import styled from 'styled-components';

import NormalButton from '../Common/NormalButton';
import GreenButton from '../Common/GreenButton';

export default function LabelAddTabl({ setIsAddTab }) {
  const handleCancelAddTab = () => {
    setIsAddTab(false);
  };

  return (
    <Wrapper>
      <Header>Label Preview</Header>
      <InputList>
        <LabelNameArea>
          <InputTitle>Label name</InputTitle>
          <textarea />
        </LabelNameArea>
        <LabelDetailArea>
          <LabelDescriptionArea>
            <InputTitle>Description</InputTitle>
            <textarea />
          </LabelDescriptionArea>
          <LabelColorArea>
            <InputTitle>Color</InputTitle>
            <textarea />
          </LabelColorArea>
        </LabelDetailArea>
        <LabelAddButtonArea>
          <InputTitle />
          <AddButtonsWrapper>
            <NormalButton onClick={handleCancelAddTab} content="Cancel" />
            <GreenButton content="Create Label" />
          </AddButtonsWrapper>
        </LabelAddButtonArea>
      </InputList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  padding: 20px 16px;
  background: #eeeeee;
  margin: 20px 0;
`;

const Header = styled.div``;

const InputList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelNameArea = styled.div`
  width: 200px;
`;

const LabelDetailArea = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

const LabelDescriptionArea = styled.div``;

const LabelColorArea = styled.div``;

const LabelAddButtonArea = styled.div``;

const InputTitle = styled.p`
  font-weight: bold;
  height: 25px;

  padding: 0;
  margin: 0;
`;

const AddButtonsWrapper = styled.div`
  display: flex;
`;

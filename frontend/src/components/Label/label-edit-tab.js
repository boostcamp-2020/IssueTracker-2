import React, { useState } from 'react';
import styled from 'styled-components';

import NormalButton from '../Common/NormalButton';
import GreenButton from '../Common/GreenButton';

export default function LabelEditTab({ labelInfo, setIsEditTab }) {
  const [newLabelInfo, setNewLabelInfo] = useState({
    labelName: labelInfo.label_name,
    labelDescription: labelInfo.label_description,
  });
  const handleLabelName = event => {
    setNewLabelInfo({ ...newLabelInfo, labelName: event.target.value });
  };

  const handleLabelDescription = event => {
    setNewLabelInfo({ ...newLabelInfo, labelDescription: event.target.value });
  };

  return (
    <Wrapper>
      <InputList>
        <LabelNameArea>
          <InputTitle>Label name</InputTitle>
          <textarea onChange={handleLabelName} value={newLabelInfo.labelName} />
        </LabelNameArea>
        <LabelDetailArea>
          <LabelDescriptionArea>
            <InputTitle>Description</InputTitle>
            <textarea
              onChange={handleLabelDescription}
              value={newLabelInfo.labelDescription}
            />
          </LabelDescriptionArea>
          <LabelColorArea>
            <InputTitle>Color</InputTitle>
            <textarea />
          </LabelColorArea>
        </LabelDetailArea>
        <LabelAddButtonArea>
          <InputTitle />
          <AddButtonsWrapper>
            <NormalButton
              content="Cancel"
              onClick={() => {
                setIsEditTab(false);
              }}
            />
            <GreenButton content="Save changes" />
          </AddButtonsWrapper>
        </LabelAddButtonArea>
      </InputList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  padding: 20px 16px;
`;

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

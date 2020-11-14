import React, { useState } from 'react';
import styled from 'styled-components';

import { updateFetch } from '../../service/fetch';

import NormalButton from '../Common/NormalButton';
import GreenButton from '../Common/GreenButton';
import RandomColorButton from '../Common/RandomColorButton';

export default function LabelEditTab({
  labelInfo,
  setIsEditTab,
  getLabelList,
}) {
  const [newLabelInfo, setNewLabelInfo] = useState({
    labelId: labelInfo.id,
    labelName: labelInfo.label_name,
    labelDescription: labelInfo.label_description,
    labelColor: labelInfo.color,
  });

  const closeEditTab = () => {
    setIsEditTab(false);
  };

  const handleLabelName = event => {
    setNewLabelInfo({ ...newLabelInfo, labelName: event.target.value });
  };

  const handleLabelDescription = event => {
    setNewLabelInfo({ ...newLabelInfo, labelDescription: event.target.value });
  };

  const handleLabelColor = event => {
    setNewLabelInfo({ ...newLabelInfo, labelColor: event.target.value });
  };

  const handleSaveChange = () => {
    updateFetch(process.env.SERVER_URL + '/api/label', {
      id: newLabelInfo.labelId,
      label_name: newLabelInfo.labelName,
      label_description: newLabelInfo.labelDescription,
      color: newLabelInfo.labelColor,
    }).then(() => getLabelList());
    closeEditTab();
  };

  return (
    <Wrapper>
      <InputList>
        <LabelNameArea>
          <InputTitle>Label name</InputTitle>
          <InputTextBox
            onChange={handleLabelName}
            value={newLabelInfo.labelName}
          />
        </LabelNameArea>
        <LabelDetailArea>
          <LabelDescriptionArea>
            <InputTitle>Description</InputTitle>
            <InputTextBox
              onChange={handleLabelDescription}
              value={newLabelInfo.labelDescription}
            />
          </LabelDescriptionArea>
          <LabelColorArea>
            <InputTitle>Color</InputTitle>
            <ColorInputArea>
              <RandomColorButton
                state={newLabelInfo}
                setState={setNewLabelInfo}
              />
              <InputTextBox
                onChange={handleLabelColor}
                value={newLabelInfo.labelColor}
              />
            </ColorInputArea>
            <ColorSpec color={newLabelInfo.labelColor} />
          </LabelColorArea>
        </LabelDetailArea>
        <LabelAddButtonArea>
          <InputTitle />
          <AddButtonsWrapper>
            <NormalButton content="Cancel" onClick={closeEditTab} />
            <GreenButton content="Save changes" onClick={handleSaveChange} />
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

  gap: 5em;
`;

const LabelNameArea = styled.div`
  width: 300px;
`;

const LabelDetailArea = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LabelDescriptionArea = styled.div`
  width: 20rem;
  position: relative;
`;

const LabelColorArea = styled.div`
  width: 8rem;
`;

const LabelAddButtonArea = styled.div``;

const InputTitle = styled.p`
  font-weight: bold;
  height: 25px;
  padding: 0;
  margin: 0;
`;

const AddButtonsWrapper = styled.div`
  display: flex;
  gap: 1em;
  position: absolute;
  right: 2em;
`;

const ColorInputArea = styled.div`
  display: flex;
  width: 15em;
`;

const InputTextBox = styled.input`
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  resize: none;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  width: 100%;
  height: 2rem;
`;

const ColorSpec = styled.div`
  width: 2em;
  height: 2em;

  ${props => {
    return `background-color:${props.color};`;
  }}

  border-radius: 20px;
  position: absolute;
  top: -3.5em;
`;

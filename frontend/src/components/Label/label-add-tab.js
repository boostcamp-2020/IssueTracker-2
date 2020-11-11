import React, { useState } from 'react';
import styled from 'styled-components';

import { postFetch } from '../../service/fetch';

import NormalButton from '../Common/NormalButton';
import GreenButton from '../Common/GreenButton';
import RandomColorButton from '../Common/RandomColorButton';

export default function LabelAddTabl({ setIsAddTab, getLabelList }) {
  const [newLabelInfo, setNewLabelInfo] = useState({
    labelName: '',
    labelDescription: '',
    labelColor: '',
  });

  const closeEditTab = () => {
    setIsAddTab(false);
  };

  const handleCancelAddTab = () => {
    closeEditTab();
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

  const handleAddLabelChange = () => {
    postFetch(process.env.SERVER_URL + '/api/label', {
      label_name: newLabelInfo.labelName,
      label_description: newLabelInfo.labelDescription,
      color: newLabelInfo.labelColor,
    }).then(() => getLabelList());
    closeEditTab();
  };

  return (
    <Wrapper>
      <Header>Label Preview</Header>
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
          </LabelColorArea>
        </LabelDetailArea>
        <LabelAddButtonArea>
          <InputTitle />
          <AddButtonsWrapper>
            <NormalButton onClick={handleCancelAddTab} content="Cancel" />
            <GreenButton
              onClick={handleAddLabelChange}
              content="Create Label"
            />
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

const LabelDescriptionArea = styled.div`
  width: 20rem;
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
`;

const ColorInputArea = styled.div`
  display: flex;
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

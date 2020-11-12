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
            placeholder="Label name"
            onChange={handleLabelName}
            value={newLabelInfo.labelName}
          />
        </LabelNameArea>
        <LabelDetailArea>
          <LabelDescriptionArea>
            <InputTitle>Description</InputTitle>
            <InputTextBox
              placeholder="Description (optional)"
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
  height: 10em;
  padding: 20px 16px;
  background: #eeeeee;
  margin: 20px 0;
  position: relative;
  border-radius: 5px;
`;

const Header = styled.div`
  width: 8em;
  text-align: center;
  background-color: #c5def5;
  border-radius: 20px;
  padding: 0.5em;
  font-size: 0.8em;
  margin-bottom: 1.5em;
  font-family: 'Roboto', sans-serif;
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
  top: 1.5em;
`;

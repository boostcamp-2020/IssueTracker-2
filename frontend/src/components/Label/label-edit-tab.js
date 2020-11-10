import React, { useState } from 'react';
import styled from 'styled-components';

import { updateFetch } from '../../service/fetch';

import NormalButton from '../Common/NormalButton';
import GreenButton from '../Common/GreenButton';

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
            <textarea
              onChange={handleLabelColor}
              value={newLabelInfo.labelColor}
            />
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

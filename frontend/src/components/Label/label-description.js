import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function LabelDescription({ labelInfo }) {
  return (
    <Wrapper>
      <LabelTagArea>
        <LabelTag
          backgroundColor={labelInfo.color}
          textColor={labelInfo.textColor}
        >
          {labelInfo.label_name}
        </LabelTag>
      </LabelTagArea>
      <LabelDescriptionArea>{labelInfo.label_description}</LabelDescriptionArea>
      <LabelManageButtonArea>
        <LabelManageButton>Edit</LabelManageButton>
        <LabelManageButton>Delete</LabelManageButton>
      </LabelManageButtonArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1em 1.5em;
  border-top: 1px solid #dddddd;
  display: flex;
`;

const LabelTagArea = styled.div`
  width: 200px;
`;

const LabelDescriptionArea = styled.div`
  margin-left: 10em;
  color: rgba(0, 0, 0, 0.5);
`;

const LabelManageButtonArea = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 20px;
  padding: 0 1.5em;
  color: rgba(0, 0, 0, 0.5);
`;

const LabelManageButton = styled.a`
  cursor: pointer;
`;

const LabelTag = styled.div`
  padding: 0 5px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  width: fit-content;
`;

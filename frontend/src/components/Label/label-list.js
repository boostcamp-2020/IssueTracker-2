import React from 'react';
import styled from 'styled-components';
import ListForm from '../Common/ListForm';
const LABEL_LIST_INFO = [
  {
    name: 'bug',
    description: `Something isn't working`,
    textColor: 'white',
    backgroundColor: 'red',
  },
  {
    name: 'bug',
    description: `Something isn't working`,
    textColor: 'white',
    backgroundColor: 'red',
  },
  {
    name: 'bug',
    description: `Something isn't working`,
    textColor: 'white',
    backgroundColor: 'red',
  },
];

export default function LabelList() {
  return (
    <ListForm
      content={
        <LabelDescriptionList>
          {LABEL_LIST_INFO.map(labelInfo => {
            return (
              <LabelDescription>
                <LabelTagArea>
                  <LabelTag
                    backgroundColor={labelInfo.backgroundColor}
                    textColor={labelInfo.textColor}
                  >
                    {labelInfo.name}
                  </LabelTag>
                </LabelTagArea>
                <LabelDescriptionArea>
                  {labelInfo.description}
                </LabelDescriptionArea>
                <LabelManageButtonArea>
                  <LabelManageButton>Edit</LabelManageButton>
                  <LabelManageButton>Delete</LabelManageButton>
                </LabelManageButtonArea>
              </LabelDescription>
            );
          })}
        </LabelDescriptionList>
      }
      type="label"
    />
  );
}

const LabelDescriptionList = styled.div`
  width: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
`;

const LabelDescription = styled.div`
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

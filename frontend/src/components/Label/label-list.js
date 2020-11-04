import React from 'react';
import styled from 'styled-components';

const LABEL_LIST_INFO = [
  { name: 'bug', description: '', textColor: 'white', backgroundColor: 'red' },
  { name: 'bug', description: '', textColor: 'white', backgroundColor: 'red' },
  { name: 'bug', description: '', textColor: 'white', backgroundColor: 'red' },
];

export default function LabelList() {
  return (
    <Wrapper>
      <ContentHeader>label</ContentHeader>
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
              <LabelDescriptionArea>ddd</LabelDescriptionArea>
              <LabelManageButtonArea>
                <button>Edit</button>
                <button>Delete</button>
              </LabelManageButtonArea>
            </LabelDescription>
          );
        })}
      </LabelDescriptionList>
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

const LabelDescription = styled.div`
  padding: 20px 16px;
  border-top: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
`;

const LabelTagArea = styled.div`
  width: 200px;
`;
const LabelDescriptionArea = styled.div`
  width: 600px;
`;
const LabelManageButtonArea = styled.div`
  width: 100px;
`;

const LabelTag = styled.div`
  padding: 0 5px;
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  width: fit-content;
`;

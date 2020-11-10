import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListForm from '../Common/ListForm';
import { getFetch } from '../../service/fetch';

export default function LabelList() {
  const [labelListData, setLabelListData] = useState([]);
  useEffect(() => {
    getFetch(process.env.SERVER_URL + '/api/label')
      .then(res => res.json())
      .then(data => setLabelListData(data.labels));
  }, []);

  return (
    <ListForm
      content={
        <LabelDescriptionList>
          {labelListData.map(labelInfo => {
            return (
              <LabelDescription>
                <LabelTagArea>
                  <LabelTag
                    backgroundColor={labelInfo.color}
                    textColor={labelInfo.textColor}
                  >
                    {labelInfo.label_name}
                  </LabelTag>
                </LabelTagArea>
                <LabelDescriptionArea>
                  {labelInfo.label_description}
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

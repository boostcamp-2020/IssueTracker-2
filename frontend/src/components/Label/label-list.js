import React from 'react';
import styled from 'styled-components';
import ListForm from '../Common/ListForm';
import LabelDescription from './label-description';
import { uuid } from 'uuidv4';

export default function LabelList({ labelListData, getLabelList }) {
  return (
    <ListForm
      content={
        <LabelDescriptionList>
          {labelListData.map(labelInfo => {
            return (
              <LabelDescription
                key={uuid()}
                labelInfo={labelInfo}
                getLabelList={getLabelList}
              />
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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListForm from '../Common/ListForm';
import LabelDescription from './label-description';
import { getFetch } from '../../service/fetch';

export default function LabelList() {
  const [labelListData, setLabelListData] = useState([]);

  const getLabelList = () => {
    getFetch(process.env.SERVER_URL + '/api/label')
      .then(res => res.json())
      .then(data => setLabelListData(data.labels));
  };

  useEffect(() => {
    getLabelList();
  }, []);

  return (
    <ListForm
      content={
        <LabelDescriptionList>
          {labelListData.map((labelInfo, index) => {
            return (
              <LabelDescription
                key={index}
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

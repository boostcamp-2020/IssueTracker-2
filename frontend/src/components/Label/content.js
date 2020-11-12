import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from './nav-bar';
import LabelList from './label-list';
import LabelAddTab from './label-add-tab';

import { getFetch } from '../../service/fetch';

export default function Content() {
  const [isAddTab, setIsAddTab] = useState(false);
  const [labelListData, setLabelListData] = useState([]);

  const getLabelList = () => {
    getFetch(process.env.SERVER_URL + '/api/label').then(data =>
      setLabelListData(data.labels),
    );
  };

  useEffect(() => {
    getLabelList();
  }, []);

  return (
    <>
      <ContentContainer>
        <Wrapper>
          <NavBar {...{ isAddTab, setIsAddTab }} />
          {isAddTab && (
            <LabelAddTab
              setIsAddTab={setIsAddTab}
              getLabelList={getLabelList}
            />
          )}
        </Wrapper>
      </ContentContainer>
      <LabelList labelListData={labelListData} getLabelList={getLabelList} />
    </>
  );
}

const Wrapper = styled.div``;

const ContentContainer = styled.div`
  width: 90%;
  margin: auto;
`;

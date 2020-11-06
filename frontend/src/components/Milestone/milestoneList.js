import React from 'react';
import styled from 'styled-components';

import LeftContent from './leftContent';
import RightContent from './rightContent';
import ListForm from '../Common/ListForm';

export default function MilestoneList(props) {
  return (
    <ListForm
      content={
        <>
          <Milestone>
            <LeftContent />
            <RightContent />
          </Milestone>
        </>
      }
      type="milestone"
    />
  );
}

const Milestone = styled.div`
  position: relative;
  width: 100%;
  padding: 1em 1.5em;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

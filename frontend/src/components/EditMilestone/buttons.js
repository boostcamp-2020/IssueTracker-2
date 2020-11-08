import React from 'react';
import styled from 'styled-components';
import NormalButton from '../Common/NormalButton';
import SaveButton from '../Common/GreenButton';

export default function Buttons({ milestoneService }) {
  const updateMilestone = () => {
    milestoneService.updateMilestone('http://localhost:3000/api/milestone', {
      id: 7,
      issue_id: 3,
      milestone_name: 'updatefetch',
      milestone_description: 'updatefetch!!!!!',
      end_date: '2020-11-08',
      status: 'closed',
    });
  };
  return (
    <Wrapper>
      <ButtonSet>
        <NormalButton content="Cancel" />
        <NormalButton content="Close milestone" />
        <SaveButton onClick={updateMilestone} content="Save Change" />
      </ButtonSet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 1.5em;
  position: relative;
`;
const ButtonSet = styled.div`
  position: absolute;
  right: 0;
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

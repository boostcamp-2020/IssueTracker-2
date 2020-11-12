import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import NormalButton from '../Common/NormalButton';
import SaveButton from '../Common/GreenButton';

export default function Buttons({ Context, milestoneService, id }) {
  const milestoneInfo = useContext(Context);

  const history = useHistory();

  const updateMilestone = () => {
    milestoneService.updateMilestone('http://localhost:3000/api/milestone', {
      id: id,
      milestone_name: milestoneInfo.title,
      milestone_description: milestoneInfo.desc,
      end_date: milestoneInfo.dueDate,
      status: 0,
    });
    history.push('/milestones');
  };

  const onClickCancel = () => {
    history.push('/milestones');
  };
  return (
    <Wrapper>
      <ButtonSet>
        <NormalButton onClick={onClickCancel} content="Cancel" />
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
  gap: 1em;
  display: flex;
  justify-content: space-around;
`;

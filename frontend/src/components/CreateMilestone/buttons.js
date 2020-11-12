import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';

export default function buttons({ Context, milestoneService }) {
  const milestoneInfo = useContext(Context);
  const history = useHistory();

  const createMilestone = () => {
    milestoneService.createMilestone(`${process.env.SERVER_URL}/api/milestone`, {
      milestone_name: milestoneInfo.title,
      milestone_description: milestoneInfo.desc,
      end_date: milestoneInfo.dueDate,
      status: 0,
    });
    history.push('/milestones');
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <CreateButton onClick={createMilestone} content="Create milestone" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.5em 0;
  width: 90%;
  margin: auto;
  position: relative;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

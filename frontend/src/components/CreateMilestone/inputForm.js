import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';
import InputDescription from './inputDescription';
import Buttons from './buttons';
import EditButtons from '../EditMilestone/buttons';

const SetMilestoneContext = createContext(() => {});
const MilestoneContext = createContext('');

export default function InputForm({ milestoneService, type, id, data }) {
  const [milestoneInfo, setMilestoneInfo] = useState({
    title: '',
    dueDate: '',
    desc: '',
  });
  console.log(data);
  return (
    <>
      <Wrapper>
        <SetMilestoneContext.Provider value={setMilestoneInfo}>
          <InputTitle
            content={data.milestone_name}
            SetTitleContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDueDate
            content={data.end_date}
            SetDueDateContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDescription
            content={data.milestone_description}
            SetDescContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
        </SetMilestoneContext.Provider>
      </Wrapper>

      <MilestoneContext.Provider value={milestoneInfo}>
        {type === 'edit' ? (
          <EditButtons
            Context={MilestoneContext}
            milestoneService={milestoneService}
            id={id}
          />
        ) : (
          <Buttons
            Context={MilestoneContext}
            milestoneService={milestoneService}
          />
        )}
      </MilestoneContext.Provider>
    </>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

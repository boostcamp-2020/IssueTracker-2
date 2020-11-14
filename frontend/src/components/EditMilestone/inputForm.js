import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';
import InputDescription from './inputDescription';
import Buttons from '../CreateMilestone/buttons';
import EditButtons from './buttons';

const SetMilestoneContext = createContext(() => {});
const MilestoneContext = createContext('');

export default function InputForm({ milestoneService, type, id, data }) {
  const [milestoneInfo, setMilestoneInfo] = useState({
    title: data.milestone_name,
    dueDate: data.end_date,
    desc: data.milestone_description,
  });

  return (
    <>
      <Wrapper>
        <SetMilestoneContext.Provider value={setMilestoneInfo}>
          <InputTitle
            content={milestoneInfo.title}
            SetTitleContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDueDate
            content={milestoneInfo.dueDate}
            SetDueDateContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDescription
            content={milestoneInfo.desc}
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

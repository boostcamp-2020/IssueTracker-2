import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';
import InputDescription from './inputDescription';
import Buttons from './buttons';
import EditButtons from '../EditMilestone/buttons';

const SetMilestoneContext = createContext(() => {});
const MilestoneContext = createContext('');

export default function InputForm({ milestoneService, type, id }) {
  const [milestoneInfo, setMilestoneInfo] = useState({
    title: '',
    dueDate: '',
    desc: '',
  });

  return (
    <>
      <Wrapper>
        <SetMilestoneContext.Provider value={setMilestoneInfo}>
          <InputTitle
            SetTitleContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDueDate
            SetDueDateContext={SetMilestoneContext}
            milestoneInfo={milestoneInfo}
          />
          <InputDescription
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
  width: 90%;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

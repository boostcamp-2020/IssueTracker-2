import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import InputTitle from './inputTitle';
import InputDueDate from './inputDueDate';
import InputDescription from './inputDescription';
import Buttons from './buttons';
import EditButtons from '../EditMilestone/buttons';

const SetTitleContext = createContext(() => {});
const SetDueDateContext = createContext(() => {});
const SetDescContext = createContext(() => {});
const MilestoneContext = createContext('');

export default function InputForm({ milestoneService, type }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <>
      <Wrapper>
        <SetTitleContext.Provider value={setTitle}>
          <InputTitle SetTitleContext={SetTitleContext} />
        </SetTitleContext.Provider>
        <SetDueDateContext.Provider value={setDueDate}>
          <InputDueDate SetDueDateContext={SetDueDateContext} />
        </SetDueDateContext.Provider>
        <SetDescContext.Provider value={setDesc}>
          <InputDescription SetDescContext={SetDescContext} />
        </SetDescContext.Provider>
      </Wrapper>

      {type === 'edit' ? (
        <MilestoneContext.Provider value={{ title, dueDate, desc }}>
          <EditButtons
            Context={MilestoneContext}
            milestoneService={milestoneService}
          />
        </MilestoneContext.Provider>
      ) : (
        <MilestoneContext.Provider value={{ title, dueDate, desc }}>
          <Buttons
            Context={MilestoneContext}
            milestoneService={milestoneService}
          />
        </MilestoneContext.Provider>
      )}
    </>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

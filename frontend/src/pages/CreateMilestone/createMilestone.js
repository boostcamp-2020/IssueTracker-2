import React from 'react';
import Header from '../../components/CreateMilestone/header';
import Explanation from '../../components/CreateMilestone/explanation';
import InputForm from '../../components/CreateMilestone/inputForm';
import CreateButton from '../../components/CreateMilestone/createButton';

const CreateMilestone = props => {
  return (
    <>
      <Header />
      <Explanation />
      <InputForm />
      <CreateButton />
    </>
  );
};
export default CreateMilestone;

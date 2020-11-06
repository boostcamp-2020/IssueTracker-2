import React from 'react';
import Header from '../../components/Common/Header';
import Explanation from '../../components/CreateMilestone/explanation';
import InputForm from '../../components/CreateMilestone/inputForm';
import CreateButton from '../../components/CreateMilestone/createButton';
import Footer from '../../components/Common/Footer';

const CreateMilestone = props => {
  return (
    <>
      <Header />
      <Explanation />
      <InputForm />
      <CreateButton />
      <Footer />
    </>
  );
};
export default CreateMilestone;

import React from 'react';
import Header from '../../components/CreateMilestone/header';

import InputForm from '../../components/CreateMilestone/inputForm';
import Buttons from '../../components/EditMilestone/buttons';
import Footer from '../../components/CreateMilestone/footer';

const EditMilestone = props => {
  return (
    <>
      <Header />
      <InputForm />
      <Buttons />
      <Footer />
    </>
  );
};
export default EditMilestone;

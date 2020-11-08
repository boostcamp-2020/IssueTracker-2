import React from 'react';
import Header from '../../components/Common/Header';
import NavButton from '../../components/EditMilestone/navButton';
import InputForm from '../../components/CreateMilestone/inputForm';
import Buttons from '../../components/EditMilestone/buttons';
import Footer from '../../components/Common/Footer';

const EditMilestone = ({ milestoneService }) => {
  return (
    <>
      <Header />
      <NavButton />
      <InputForm />
      <Buttons milestoneService={milestoneService} />
      <Footer />
    </>
  );
};
export default EditMilestone;

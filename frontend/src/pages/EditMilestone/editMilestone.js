import React from 'react';
import Header from '../../components/Common/Header';
import NavButton from '../../components/EditMilestone/navButton';
import InputForm from '../../components/CreateMilestone/inputForm';
import Footer from '../../components/Common/Footer';
import { useHistory } from 'react-router-dom';

const EditMilestone = ({ milestoneService }) => {
  const id = useHistory().location.state.id;
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }

  return (
    <>
      <Header />
      <NavButton />
      <InputForm milestoneService={milestoneService} type="edit" id={id} />
      <Footer />
    </>
  );
};
export default EditMilestone;

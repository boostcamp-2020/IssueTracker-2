import React from 'react';
import Header from '../../components/Common/Header';
import NavButton from '../../components/Milestone/navButton';
import MileStoneList from '../../components/Milestone/milestoneList';
import { useHistory } from 'react-router-dom';

const Milestone = ({ milestoneService }) => {
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }

  return (
    <>
      <Header />
      <NavButton />
      <MileStoneList milestoneService={milestoneService} />
    </>
  );
};

export default Milestone;

import React from 'react';
import Header from '../../components/Common/Header';
import NavButton from '../../components/Milestone/navButton';
import MileStoneList from '../../components/Milestone/milestoneList';
import { useHistory } from 'react-router-dom';

const Milestone = ({milestoneService}) => {

  return (
    <>
      <Header />
      <NavButton />
      <MileStoneList milestoneService={milestoneService}/>
    </>
  );
};

export default Milestone;

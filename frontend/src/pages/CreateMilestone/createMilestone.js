import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Common/Header';
import Explanation from '../../components/CreateMilestone/explanation';
import InputForm from '../../components/CreateMilestone/inputForm';
import Footer from '../../components/Common/Footer';
import { useHistory } from 'react-router-dom';

const CreateMilestone = ({ milestoneService }) => {
  const history = useHistory();
  if (!document.cookie.includes('jwt')) {
    history.push('/');
  }
  return (
    <Wrapper>
      <Header />
      <Explanation />
      <InputForm milestoneService={milestoneService} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default CreateMilestone;

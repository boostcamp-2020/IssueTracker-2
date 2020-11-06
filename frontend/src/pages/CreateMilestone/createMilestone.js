import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Common/Header';
import Explanation from '../../components/CreateMilestone/explanation';
import InputForm from '../../components/CreateMilestone/inputForm';
import Footer from '../../components/Common/Footer';
import Buttons from '../../components/CreateMilestone/buttons';

const CreateMilestone = props => {
  return (
    <Wrapper>
      <Header />
      <Explanation />
      <InputForm />
      <Buttons />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export default CreateMilestone;

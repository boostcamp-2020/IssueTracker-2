import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CreateButton from '../Common/GreenButton';
import NavButton from '../Common/NavButton';
import FiilteringBox from './filteringBox';
export default function Navigation(props) {
  const history = useHistory();

  const onClickNewIssue = () => {
    history.push('/issue/create');
  };

  return (
    <Wrapper>
      <FiilteringBox />
      <ButtonWrapper>
        <Nav>
          <NavButton type="issue" />
        </Nav>
        <CreateButton onClick={onClickNewIssue} content="New issue" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 3em 0;
  position: relative;
  display: flex;
`;

const Nav = styled.div``;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 1em;
  justify-content: space-between;
`;

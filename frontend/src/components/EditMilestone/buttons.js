import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SaveButton from '../Common/greenButton';

export default function Buttons(props) {
  const history = useHistory();
  const onClickCancel = () => {
    history.push('/milestones');
  };

  return (
    <Wrapper>
      <ButtonSet>
        <Button onClick={onClickCancel}>Cancel</Button>
        <Button>Close milestone</Button>
        <SaveButton content="Save Change" />
      </ButtonSet>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding: 1.5em;
  position: relative;
`;

const ButtonSet = styled.div`
  position: absolute;
  right: 0;
  width: 33%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px;
  color: black;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`;

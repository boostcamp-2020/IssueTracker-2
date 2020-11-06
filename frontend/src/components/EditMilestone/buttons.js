import React from 'react';
import styled from 'styled-components';
import SaveButton from '../Common/GreenButton';

export default function Buttons(props) {
  return (
    <Wrapper>
      <ButtonSet>
        <Button>Cancel</Button>
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
  width: 25%;
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
  cursor: pointer;
`;

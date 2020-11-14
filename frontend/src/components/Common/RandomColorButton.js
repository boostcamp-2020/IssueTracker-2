import React from 'react';
import styled from 'styled-components';
import { SyncIcon } from '@primer/octicons-react';

const HEX_NUMBER = '0123456789abcdef';
const HEX_NUMBER_LENGTH = 6;

export default function RandomColorButton({ state, setState }) {
  const getRandomColorHex = () => {
    let randomColorHex = '#';

    for (let i = 0; i < HEX_NUMBER_LENGTH; i++)
      randomColorHex += HEX_NUMBER[Math.floor(Math.random() * 16)];

    setState({
      ...state,
      labelColor: randomColorHex,
    });
  };
  return (
    <Wrapper onClick={getRandomColorHex}>
      <SyncIcon size={16} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 2em;
  height: 2em;
  margin: 0;
  background-color: #c5def5;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-right: 0.5rem;
`;

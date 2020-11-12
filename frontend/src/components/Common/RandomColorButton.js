import React from 'react';
import styled from 'styled-components';

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
  return <Wrapper onClick={getRandomColorHex}>Rand</Wrapper>;
}

const Wrapper = styled.button`
  padding: 0;
  margin: 0;
  height: 2rem;
  margin-right: 0.5rem;
`;

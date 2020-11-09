import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default () => {
  const history = useHistory();
  const onClickCancel = () => {
    history.push('/issues');
  };
  return <TextButton onClick={onClickCancel}>Cancel</TextButton>;
};

const TextButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  outline: none;
`;

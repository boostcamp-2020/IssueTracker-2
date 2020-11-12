import React from 'react';
import styled from 'styled-components';

export default ({ setIssueName }) => {
  const onChange = e => {
    setIssueName(e.target.value);
  };

  return (
    <Title>
      <GlowingBorder onChange={onChange} placeholder="Title" type="text" />
    </Title>
  );
};

const Title = styled.div`
  height: 50px;
  margin: 8px;
`;

const GlowingBorder = styled.input`
  width: 100%;
  padding: 8px 12px;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  background-color: #f6f8fa;
  &:focus {
    background-color: #fff;
    border: 1px solid #9ecaed;
    box-shadow: 0 0 10px #9ecaed;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

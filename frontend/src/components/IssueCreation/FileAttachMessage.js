import React, { useState } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Message>
      Attach files by dragging & droppping, selecting or pasting then.
    </Message>
  );
};

const Message = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e1e4e8;
  border-top: 1px dashed #e1e4e8;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 5px;
  font-size: 14px;
  color: #586069;
`;

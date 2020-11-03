import React, { useState } from 'react';
import styled from 'styled-components';

export default function UserInput(props) {
  const [idWarningFlag, setIdWarningFlag] = useState(false);
  const [pwdWarningFlag, setPwdWarningFlag] = useState(false);

  const idChangeHandler = event => {
    const changed = event.target.value;

    if (changed.length === 0) {
      setIdWarningFlag(false);
      return;
    }

    if (changed.length >= 6 && changed.length <= 16) {
      setIdWarningFlag(false);
      return;
    }

    setIdWarningFlag(true);
  };

  const pwdChangeHandler = event => {
    const changed = event.target.value;

    if (changed.length === 0) {
      setPwdWarningFlag(false);
      return;
    }

    if (changed.length >= 6 && changed.length <= 16) {
      setPwdWarningFlag(false);
      return;
    }

    setPwdWarningFlag(true);
  };

  return (
    <>
      <ContentWrapper>
        <InputTitle>아이디</InputTitle>
        <Textarea
          warningFlag={idWarningFlag}
          onChange={idChangeHandler}
          type="text"
        />
        {idWarningFlag && (
          <WarningMessage>
            아이디는 최소 6자리에서 16자리까지 입력할 수 있습니다.
          </WarningMessage>
        )}
      </ContentWrapper>
      <ContentWrapper>
        <InputTitle>비밀번호</InputTitle>
        <Textarea
          warningFlag={pwdWarningFlag}
          onChange={pwdChangeHandler}
          type="password"
        />
        {pwdWarningFlag && (
          <WarningMessage>
            비밀번호는 최소 6자리에서 16자리까지 입력할 수 있습니다.
          </WarningMessage>
        )}
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  position: relative;
`;

const WarningMessage = styled.div`
  color: red;
  font-size: 0.75em;
  position: absolute;
  top: 7em;
`;

const Textarea = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.2em 0 2.5em 0;
  width: 100%;
  height: 2.5em;
  font-size: 1em;
  padding: 0.2em 0.5em;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid
      ${props => {
        if (props.warningFlag) return 'red';
        return 'green';
      }};
  }
`;

const InputTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: 'Nanum Gothic', sans-serif;
`;

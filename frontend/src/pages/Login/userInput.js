import React, { useState } from 'react';
import styled from 'styled-components';

export default function serInput(props) {
  const [warningFlag, setWarningFlag] = useState(false);

  const changeHandler = event => {
    const changed = event.target.value;

    if (changed.length >= 6 && changed.length <= 16) {
      setWarningFlag(false);
    } else {
      setWarningFlag(true);
    }
  };

  return (
    <>
      <div>
        <InputTitle>아이디</InputTitle>
        <Textarea onChange={changeHandler} />
        {warningFlag && (
          <WarningMessage>
            아이디는 최소 6자리에서 16자리까지 입력할 수 있습니다.
          </WarningMessage>
        )}
      </div>
      <div>
        <InputTitle>비밀번호</InputTitle>
        <Textarea onChange={changeHandler} />
        {warningFlag && (
          <WarningMessage>
            비밀번호는 최소 6자리에서 16자리까지 입력할 수 있습니다.
          </WarningMessage>
        )}
      </div>
    </>
  );
}

const WarningMessage = styled.div`
  color: red;
  font-size: 0.8em;
  margin-bottom: 0.4em;
`;

const Textarea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 0.2em 0;
  width: 100%;
  height: 2em;
  font-size: 1.5em;
  vertical-align: middle;
  resize: none;
`;

const InputTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

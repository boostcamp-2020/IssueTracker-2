import React, { useContext } from 'react';
import styled from 'styled-components';

export default function InputTitle({
  SetTitleContext,
  milestoneInfo,
  content,
}) {
  const setTitle = useContext(SetTitleContext);

  const onChange = e => {
    setTitle({ ...milestoneInfo, title: e.target.value });
  };

  return (
    <Wrapper>
      <Title>Title</Title>
      <TitleInput
        type="text"
        placeholder="Title"
        value={content}
        onChange={onChange}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1em 0;
`;

const Title = styled.div`
  margin-bottom: 0.5em;
  font-weight: bold;
`;
const TitleInput = styled.input`
  width: 40%;
  height: 3em;
  padding: 0 1em;
  border: 1px solid #e1e4e8;
  font-size: 0.8em;
  border-radius: 5px;
  background-color: #fafbfc;
`;

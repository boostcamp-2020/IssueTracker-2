import React from 'react';
import styled from 'styled-components';

export default function FiilteringBox(props) {
  return (
    <>
      <FilteringButton>
        Fileters
        <Caret />
      </FilteringButton>
      <SearchBar type="text" value="is:issue is:open " />
    </>
  );
}

const FilteringButton = styled.summary`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px 0 0 5px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  cursor: pointer;
`;
const SearchBar = styled.input`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 0 5px 5px 0;
  width: 60%;
  font-size: 1em;
  padding: 0 1em;
`;

const Caret = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: '';
  border-top-style: solid;
  border-top-width: 4px;
  border-right: 4px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
`;

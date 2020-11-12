import React from 'react';
import styled from 'styled-components';
import DropdownCaret from '../Common/DropdownCaret';
import PopupContent from '../Common/popup';

export default function FiilteringBox(props) {
  return (
    <>
      <Details>
        <FilteringButton>
          Fileters
          <DropdownCaret />
        </FilteringButton>
        <PopupContent type="issue" />
      </Details>
      <SearchBar type="text" value="is:issue is:open " readOnly />
    </>
  );
}
const Details = styled.details`
  & > summary::-webkit-details-marker {
    display: none;
  }
`;

const FilteringButton = styled.summary`
  list-style: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 5px 0 0 5px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SearchBar = styled.input`
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 0 5px 5px 0;
  width: 53%;
  font-size: 1em;
  padding: 0 1em;
`;

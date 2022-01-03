import React from 'react';

import styled from 'styled-components';

import searchIcon from 'public/icon-search.svg';

export interface ISearchInputProps {
  placeholderText: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  inputValue: string,
}

const SearchInputWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 800px;
`;

const StyledInputSearch = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 68px;
  border: 0;
  font-size: 24px;
  &:active, &:focus {
    outline: none;
  }
`;

const IconInputSearch = styled.div`
  position: absolute;
  height: 36px;
  width: 36px;
  left: 0;
  top: 12px;
  background: center no-repeat url(${searchIcon});
`;

export const SearchInput: React.FC<ISearchInputProps> = ({placeholderText, onChange, inputValue}) => {
  return (
    <SearchInputWrapper>
      <StyledInputSearch type='search'
                         placeholder={placeholderText}
                         onChange={onChange}
                         value={inputValue}
      />
      <IconInputSearch/>
    </SearchInputWrapper>
  )
};

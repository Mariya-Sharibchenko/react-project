import React from 'react';

import styled from 'styled-components';

export interface ISearchInputProps {
  placeholderText: string,
  onChange: () => void,
}

const StyledInputSearch = styled.input`
  
`;

export const SearchInput: React.FC<ISearchInputProps> = ({placeholderText, onChange}) => {
  return (
    <StyledInputSearch type='search' placeholder={placeholderText} onChange={onChange}/>
  )
};

import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, mainText, secondaryText, invalidData, filterBackground } = Colors;

export interface IStyledInputProps {
  isValid: boolean,
}

export interface InputProps extends IStyledInputProps {
  type: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  placeholderText: string,
  inputValue?: string,
}

const StyledInput = styled.input<IStyledInputProps>`
  min-width: 354px;
  min-height: 60px;
  padding: 0 32px 0 16px;
  outline: none;
  border: 0;
  border-bottom: ${({isValid}) => isValid ? `2px solid ${secondaryText}` : `2px solid ${invalidData}`};
  background-color: ${filterBackground};
  color: ${({isValid}) => isValid ? mainText : invalidData};
  cursor: text;
  font-size: 16px;
  
  &:focus, &:active {
    border-bottom: ${({isValid}) => isValid ? `2px solid ${mainColor}` : `2px solid ${invalidData}`};
  }
`;

export const Input: React.FC<InputProps> = ({ placeholderText, inputValue, type, onChange, isValid }) => {
  return (
    <StyledInput
      type={type}
      onChange={onChange}
      isValid={isValid}
      placeholder={placeholderText}
      value={inputValue}
    />
  )
};




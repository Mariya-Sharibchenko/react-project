import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, mainText, secondaryText, invalidData, filterBackground } = Colors;

export interface IStyledInputProps {
  isActive: boolean,
  isValid: boolean,
}

export interface InputProps extends IStyledInputProps {
  onChange: () => void,
  placeholderText: string,
  text?: string,
}

const StyledInput = styled.input<IStyledInputProps>`
  min-width: 354px;
  min-height: 60px;
  padding: 0 32px 0 16px;
  outline: none;
  border: 0;
  border-bottom: ${({isValid, isActive}) => isActive 
          ? `2px solid ${mainColor}` 
          : isValid 
                  ? `2px solid ${secondaryText}` 
                  : `2px solid ${invalidData}`};
  background-color: ${filterBackground};
  color: ${({isValid, isActive}) => isActive
          ? mainText
          : isValid
                  ? secondaryText
                  : invalidData};
  cursor: text;
  font-size: 16px;
`;

export const Input: React.FC<InputProps> = ({ placeholderText, text, onChange, isActive, isValid }) => {
  return (
    <StyledInput
      onChange={onChange}
      isActive={isActive}
      isValid={isValid}
      placeholder={placeholderText}
      value={text}
    />
  )
};




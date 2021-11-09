import React from 'react';

import { StyledInput, StyledLabel, IStyledInputProps, StyledLabelText } from './styled';

export interface InputProps extends IStyledInputProps {
  type: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  placeholderText: string,
  inputValue?: string,
  labelText: string,
}

export const Input: React.FC<InputProps> = ({ labelText, placeholderText, inputValue, type, onChange, isValid }) => {
  return (
    <StyledLabel>
      <StyledLabelText isValid={isValid}>
        {isValid ? labelText : `Некорректный ${labelText.toLowerCase()}`}
      </StyledLabelText>
      <StyledInput
        type={type}
        onChange={onChange}
        isValid={isValid}
        placeholder={placeholderText}
        value={inputValue}
      />
    </StyledLabel>
  )
};

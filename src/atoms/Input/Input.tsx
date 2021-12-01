import React from 'react';

import { IInputProps, WrongInputData } from 'context';

import { StyledInput, StyledLabel, IStyledInputProps, StyledLabelText } from './styled';

export interface IInputComponentProps extends IStyledInputProps, Omit<IInputProps, 'validationFunction'> {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  inputValue: string,
}

export const Input: React.FC<IInputComponentProps> = ({ labelText, placeholderText, inputValue, type, onChange, isValid }) => {
  return (
    <StyledLabel>
      <StyledLabelText isValid={isValid}>
        {isValid ? labelText : `${WrongInputData} ${labelText.toLowerCase()}`}
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

import React from 'react';

import { ILabelTextProps, Input, InputWrapper, ISettingInputProps, LabelText } from '../styled';

export interface IProfileSettingInput extends ISettingInputProps, ILabelTextProps{
  placeholderText: string,
  maxLength: number,
  inputValue: string,
  onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
}

export const DateInput: React.FC<IProfileSettingInput> = ({
  isRequired,
  isValid,
  placeholderText,
  maxLength,
  inputValue,
  onKeyDown
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>Образование</LabelText>

      <Input
        type='text'
        onKeyDown={onKeyDown}
        isValid={isValid}
        placeholder={placeholderText}
        required={isRequired}
        value={inputValue}
        maxLength={maxLength}
      />
    </InputWrapper>
  )
};

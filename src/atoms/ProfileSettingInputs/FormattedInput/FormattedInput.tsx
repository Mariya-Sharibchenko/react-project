import React from 'react';

import { IFormattedInputProps } from '../interface';
import { Input, InputWrapper, LabelText } from '../styled';

export const FormattedInput: React.FC<IFormattedInputProps> = ({
  isRequired,
  isValid,
  inputId,
  labelText,
  placeholderText,
  maxLength,
  inputValue,
  onKeyDown,
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{ labelText }</LabelText>

      <Input
        type='text'
        onKeyDown={onKeyDown}
        isValid={isValid}
        placeholder={placeholderText}
        required={isRequired}
        value={inputValue}
        maxLength={maxLength}
        id={inputId}
      />
    </InputWrapper>
  );
};

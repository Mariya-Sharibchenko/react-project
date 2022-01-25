import React from 'react';

import { IFormattedInput } from './interface';
import { Input, InputWrapper, LabelText } from './styled';

export const FormattedInput: React.FC<IFormattedInput> = ({
  isRequired,
  isValid,
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
        id={labelText}
      />
    </InputWrapper>
  )
};

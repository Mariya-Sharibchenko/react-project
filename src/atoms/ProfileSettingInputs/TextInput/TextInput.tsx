import React from 'react';

import { ITextInputProps } from '../interface';
import { Input, InputWrapper, LabelText } from '../styled';

export const TextInput: React.FC<ITextInputProps> = ({
  isRequired,
  isValid,
  labelText,
  placeholderText,
  inputValue,
  onInputChange,
  isInputSizeBig
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{ labelText }</LabelText>

      <Input
        type='text'
        isValid={isValid}
        placeholder={placeholderText}
        required={isRequired}
        value={inputValue}
        onChange={onInputChange}
        id={labelText}
        isInputSizeBig={isInputSizeBig}
      />
    </InputWrapper>
  )
};

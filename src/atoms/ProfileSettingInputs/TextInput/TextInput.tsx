import React from 'react';

import { ITextInputProps } from '../interface';
import { Input, Textarea, InputWrapper, LabelText } from '../styled';

export const TextInput: React.FC<ITextInputProps> = ({
  isRequired,
  isValid,
  inputId,
  labelText,
  placeholderText,
  inputValue,
  onInputChange,
  isTextarea,
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{ labelText }</LabelText>

      { isTextarea
        ? <Textarea
            isValid={isValid}
            placeholder={placeholderText}
            required={isRequired}
            value={inputValue}
            onChange={onInputChange}
            id={inputId}
          />

        : <Input
            type='text'
            isValid={isValid}
            placeholder={placeholderText}
            required={isRequired}
            value={inputValue}
            onChange={onInputChange}
            id={inputId}
          />
      }
    </InputWrapper>
  );
};

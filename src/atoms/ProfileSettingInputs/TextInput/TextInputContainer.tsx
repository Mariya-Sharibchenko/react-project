import React, { useEffect, useState } from 'react';

import { TextInput } from './TextInput';
import { IProfileSettingInputProps } from '../interface';
import { ProfileDataTypes } from 'context';

export interface ITextInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getValue: (id: ProfileDataTypes, value: string) => void,
  isTextarea?: boolean,
}

export const TextInputContainer: React.FC<ITextInputContainerProps> = ({
  inputId,
  labelText,
  placeholderText,
  isRequired,
  isValid,
  getValue,
  isTextarea,
}) => {
  const [ value, setValue ] = useState('');

  useEffect(() => {
    getValue(inputId, value)
  }, [value]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target.value)
  };

  return (
    <TextInput
      inputId={inputId}
      labelText={labelText}
      placeholderText={placeholderText}
      isValid={isValid}
      isRequired={isRequired}
      onInputChange={onChange}
      inputValue={value}
      isTextarea={isTextarea}
    />
  )
};

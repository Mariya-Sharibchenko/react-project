import React, { useEffect, useState } from 'react';

import { TextInput } from './TextInput';
import { IProfileSettingInputProps } from '../interface';

export interface ITextInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getValue: (value: string) => void,
  isTextarea?: boolean,
}

export const TextInputContainer: React.FC<ITextInputContainerProps> = ({
  labelText,
  placeholderText,
  isRequired,
  isValid,
  getValue,
  isTextarea,
}) => {
  const [ value, setValue ] = useState('');

  useEffect(() => {
    getValue(value)
  }, [value]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(evt.target.value)
  };

  return (
    <TextInput
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

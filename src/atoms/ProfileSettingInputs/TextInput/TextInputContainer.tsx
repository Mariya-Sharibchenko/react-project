import React, { useEffect, useState } from 'react';

import { TextInput } from './TextInput';
import { IProfileSettingInputProps } from '../interface';

export interface ITextInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getValue: (value: string) => void,
}

export const TextInputContainer: React.FC<ITextInputContainerProps> = ({
  labelText,
  placeholderText,
  isInputSizeBig,
  isRequired,
  isValid,
  getValue,
}) => {
  const [ value, setValue ] = useState('');

  useEffect(() => {
    getValue(value)
  }, [value]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
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
      isInputSizeBig={isInputSizeBig}
    />
  )
};

import React, { useEffect, useMemo, useState } from 'react';

import { FormattedInput } from './FormattedInput';
import { IProfileSettingInputProps } from '../interface';

export interface IFormattedInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  formatValueFunction: (prevState: string, evt: React.KeyboardEvent<HTMLInputElement>) => string,
  getDateValue: (value: string) => void,
}

export const FormattedInputContainer: React.FC<IFormattedInputContainerProps> = ({
  labelText,
  placeholderText,
  formatValueFunction,
  isRequired,
  isValid,
  getDateValue,
}) => {
  const [ value, setValue ] = useState('');

  const maxDateLength = useMemo(() => placeholderText.length, []);

  useEffect(() => {
    getDateValue(value)
  }, [value]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(prevState => formatValueFunction(prevState, evt))
  }

  return (
    <FormattedInput
      labelText={labelText}
      placeholderText={placeholderText}
      inputValue={value}
      onKeyDown={onKeyDown}
      isValid={isValid}
      isRequired={isRequired}
      maxLength={maxDateLength}
    />
  )
};

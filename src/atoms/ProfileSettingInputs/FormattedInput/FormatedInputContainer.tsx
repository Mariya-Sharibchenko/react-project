import React, { useEffect, useMemo, useState } from 'react';

import { FormattedInput } from './FormattedInput';
import { IProfileSettingInputProps } from '../interface';
import { ProfileDataTypes } from 'context';

export interface IFormattedInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  formatValueFunction: (prevState: string, evt: React.KeyboardEvent<HTMLInputElement>) => string,
  getValue: (id: ProfileDataTypes, value: string) => void,
}

export const FormattedInputContainer: React.FC<IFormattedInputContainerProps> = ({
  inputId,
  labelText,
  placeholderText,
  formatValueFunction,
  isRequired,
  isValid,
  getValue,
}) => {
  const [ value, setValue ] = useState('');

  const maxDateLength = useMemo(() => placeholderText.length, []);

  useEffect(() => {
    getValue(inputId, value);
  }, [value]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(prevState => formatValueFunction(prevState, evt));
  };

  return (
    <FormattedInput
      inputId={inputId}
      labelText={labelText}
      placeholderText={placeholderText}
      inputValue={value}
      onKeyDown={onKeyDown}
      isValid={isValid}
      isRequired={isRequired}
      maxLength={maxDateLength}
    />
  );
};

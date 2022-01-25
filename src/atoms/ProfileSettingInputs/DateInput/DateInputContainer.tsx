import React, { useEffect, useMemo, useState } from 'react';

import { FormattedInput } from '../FormattedInput';
import { ProfileSettingInputPlaceholders, ProfileSettingInputLabels } from 'context';
import { formatDate } from './utils/formatDate';

export interface IDateInputContainerProps {
  isRequired: boolean,
  isValid: boolean,
  getDateValue: (value: string) => void,
}

export const DateInputContainer: React.FC<IDateInputContainerProps> = ({
  isRequired,
  isValid,
  getDateValue,
}) => {
  const [ value, setValue ] = useState('');

  const maxDateLength = useMemo(() => ProfileSettingInputPlaceholders.birthDate.length, []);

  useEffect(() => {
    getDateValue(value)
  }, [value]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(prevState => formatDate(prevState, evt))
  }

  return (
    <FormattedInput
      labelText={ProfileSettingInputLabels.birthDate}
      placeholderText={ProfileSettingInputPlaceholders.birthDate}
      inputValue={value}
      onKeyDown={onKeyDown}
      isValid={isValid}
      isRequired={isRequired}
      maxLength={maxDateLength}
    />
  )
};
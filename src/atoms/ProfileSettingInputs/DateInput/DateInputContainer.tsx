import React, { useEffect, useMemo, useState } from 'react';

import { DateInput } from './DateInput';
import { DateInputPlaceholderText } from 'context';
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

  const maxDateLength = useMemo(() => DateInputPlaceholderText.length, []);

  useEffect(() => {
    getDateValue(value)
  }, [value]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(prevState => formatDate(prevState, evt))
  }

  return (
    <DateInput
      placeholderText={DateInputPlaceholderText}
      inputValue={value}
      onKeyDown={onKeyDown}
      isValid={isValid}
      isRequired={isRequired}
      maxLength={maxDateLength}
    />
  )
};

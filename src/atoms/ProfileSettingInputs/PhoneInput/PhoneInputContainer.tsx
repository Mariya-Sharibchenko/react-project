import React, { useEffect, useMemo, useState } from 'react';

import { FormattedInput } from '../FormattedInput';
import { ProfileSettingInputPlaceholders, ProfileSettingInputLabels } from 'context';
import { formatPhone } from './utils/formatPhone';

export interface IPhoneInputContainerProps {
  isRequired: boolean,
  isValid: boolean,
  getDateValue: (value: string) => void,
}

export const PhoneInputContainer: React.FC<IPhoneInputContainerProps> = ({
  isRequired,
  isValid,
  getDateValue,
}) => {
  const [ value, setValue ] = useState('');

  const maxDateLength = useMemo(() => ProfileSettingInputPlaceholders.phone.length, []);

  useEffect(() => {
    getDateValue(value)
  }, [value]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(prevState => formatPhone(prevState, evt))
  }

  return (
    <FormattedInput
      labelText={ProfileSettingInputLabels.phone}
      placeholderText={ProfileSettingInputPlaceholders.phone}
      inputValue={value}
      onKeyDown={onKeyDown}
      isValid={isValid}
      isRequired={isRequired}
      maxLength={maxDateLength}
    />
  )
};

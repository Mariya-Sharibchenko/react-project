import React, { useEffect, useState } from 'react';

import { FilteredInput } from '../FilteredInput';
import { ProfileSettingInputPlaceholders, ProfileSettingInputLabels, IFilterOptionsProps } from 'context';

export interface IEducationInputContainerProps {
  isRequired: boolean,
  isValid: boolean,
  getDateValue: (value: string) => void,
  optionsArray: IFilterOptionsProps[]
}

export const EducationInputContainer: React.FC<IEducationInputContainerProps> = ({
  isRequired,
  isValid,
  getDateValue,
  optionsArray,
}) => {
  const [ isOpened, setIsOpened ] = useState(true);
  const [ options, setOptions] = useState<IFilterOptionsProps[]>(optionsArray);
  const [ value, setValue ] = useState('');

  useEffect(() => {
    getDateValue(value)
  }, [value]);

  const onOptionClick = () => {
    setValue(prevState => prevState)
  }

  return (
    <FilteredInput
      labelText={ProfileSettingInputLabels.education}
      placeholderText={ProfileSettingInputPlaceholders.education}
      inputValue={value}
      isValid={isValid}
      isRequired={isRequired}
      isOpened={isOpened}
      optionsArray={options}
      onOptionClick={onOptionClick}
    />
  )
};

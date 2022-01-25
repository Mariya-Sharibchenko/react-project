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
  const [ isOpened, setIsOpened ] = useState(false);
  const [ options, setOptions ] = useState<IFilterOptionsProps[]>(optionsArray);
  const [ value, setValue ] = useState('');

  useEffect(() => {
    setValue(options.find(({ isChecked}) => isChecked)?.value || '')

    getDateValue(value)
  }, [value, options]);

  const onOpenOptionsClick = () => {
    setIsOpened(prevState => !prevState)
  }

  const onOptionClick: React.MouseEventHandler<HTMLLIElement> = (evt ) => {
    const target = evt.target as HTMLLIElement
    const value = target.dataset.value

    setOptions(prevState =>
      prevState.map((el) =>
        el.label === value
        ? {...el, isChecked: true}
        : {...el, isChecked: false}
      )
    )
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
      onOpenOptionsClick={onOpenOptionsClick}
    />
  )
};

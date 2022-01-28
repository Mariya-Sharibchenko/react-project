import React, { useEffect, useState } from 'react';

import { FilteredInput } from './FilteredInput';
import { IFilterOptionsProps } from 'context';
import { IProfileSettingInputProps } from '../interface';

export interface IFilteredInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getValue: (value: string) => void,
  optionsArray: IFilterOptionsProps[]
}

export const FilteredInputContainer: React.FC<IFilteredInputContainerProps> = ({
  labelText,
  placeholderText,
  isRequired,
  isValid,
  getValue,
  optionsArray,
}) => {
  const [ isOpened, setIsOpened ] = useState(false);
  const [ options, setOptions ] = useState<IFilterOptionsProps[]>(optionsArray);
  const [ value, setValue ] = useState('');

  useEffect(() => {
    setValue(options.find(({ isChecked}) => isChecked)?.value || '')

    getValue(value)
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
      labelText={labelText}
      placeholderText={placeholderText}
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

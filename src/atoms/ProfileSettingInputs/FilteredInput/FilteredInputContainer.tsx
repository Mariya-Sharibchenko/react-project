import React, { useCallback, useEffect, useState } from 'react';

import { FilteredInput } from './FilteredInput';
import { IFilterOptionsProps, ProfileDataTypes } from 'context';
import { IProfileSettingInputProps } from '../interface';

export interface IFilteredInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getValue: (id: ProfileDataTypes, value: string) => void,
  optionsArray: IFilterOptionsProps[]
}

export const FilteredInputContainer: React.FC<IFilteredInputContainerProps> = ({
  inputId,
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
    setValue(options.find(({ isChecked}) => isChecked)?.value || '');

    getValue(inputId, value);
  }, [value, options]);

  const onOpenOptionsClick = useCallback(() => setIsOpened(prevState => !prevState), []);

  const onOptionClick: React.MouseEventHandler<HTMLLIElement> = useCallback((evt ) => {
    const target = evt.target as HTMLLIElement;
    const value = target.dataset.value;

    setOptions(prevState =>
      prevState.map((el) =>
        el.label === value
        ? {...el, isChecked: true}
        : {...el, isChecked: false}
      )
    );
  }, []);

  return (
    <FilteredInput
      inputId={inputId}
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
  );
};

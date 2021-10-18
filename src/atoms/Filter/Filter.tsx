import React, { useEffect, useState } from 'react';

import { IFilterOptionsProps } from 'context';
import { StyledSelect, FilterWrapper, ElementToHideDefaultOption, CheckboxesWrapper, ButtonSelectAll, Option, OptionCheckbox, SelectWrapper } from './styled';
import { Checkmark } from '../Checkmark';

export interface FilterProps {
  selectAllText: string,
  optionsArray: Array<IFilterOptionsProps>,
}

export const Filter: React.FC<FilterProps> = ({selectAllText, optionsArray }) => {
  const options = optionsArray.reduce((acc, { value }) => {
    return [...acc, `${value}`]

  }, [] as string[]);

  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ allOptionsAreSelected, setAllOptionsAreSelected ] = useState<boolean>(true);
  const [ selectedOptions, setSelectedOptions] = useState<string[]>(options);

  useEffect(() => {
    selectedOptions.length === optionsArray.length
      ? setAllOptionsAreSelected(true)
      : setAllOptionsAreSelected(false)

  }, [selectedOptions, allOptionsAreSelected])

  const onSelectClick = () => {
    if (filterIsOpened && selectedOptions.length === 0) {
      setAllOptionsAreSelected(true)
      setSelectedOptions(options)
    }

    setFilterIsOpened(prevState => !prevState)
  }

  const onSelectAllClick = () => {
    allOptionsAreSelected
      ? setSelectedOptions([])
      : setSelectedOptions(options)

    setAllOptionsAreSelected(prevState => !prevState)
  }

  const onCheckboxSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.id.toString()
    setSelectedOptions(prevState =>
      prevState.includes(inputValue)
        ? prevState.filter(el => el !== inputValue)
        : [...prevState, inputValue]
    )
  }

  return (
    <FilterWrapper selectIsOpened={filterIsOpened}>
      <SelectWrapper onClick={onSelectClick}>
        <StyledSelect selectIsOpened={filterIsOpened}>
          <option>{selectedOptions.length === optionsArray.length ? selectAllText : selectedOptions.join(', ')}</option>
        </StyledSelect>
        <ElementToHideDefaultOption/>
      </SelectWrapper>

    { filterIsOpened ?
      <CheckboxesWrapper>
        <ButtonSelectAll onClick={onSelectAllClick}>
          {allOptionsAreSelected ? 'Отменить все' : 'Выбрать все'}
        </ButtonSelectAll>

        {optionsArray.map(({value}) => {
          return <Option key={value} htmlFor={value}>
            <OptionCheckbox type='checkbox'
                            id={value}
                            onChange={onCheckboxSelect}
                            checked={selectedOptions.includes(value)}
            />
            <Checkmark/>
            {value}
          </Option>
        })}
      </CheckboxesWrapper>
      : <></>
    }
    </FilterWrapper>
  )
};

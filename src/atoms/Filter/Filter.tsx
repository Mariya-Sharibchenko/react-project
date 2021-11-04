import React, { useMemo } from 'react';

import { StyledSelect, FilterWrapper, ElementToHideDefaultOption, CheckboxesWrapper, ButtonSelectAll, Option, OptionCheckbox, SelectWrapper } from './styled';
import { Checkmark } from '../Checkmark';

export interface FilterProps {
  filterIsOpened: boolean,
  selectAllText: string,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  selectedOptions: string[],
  optionsArray: string[],
}

export const Filter: React.FC<FilterProps> = ({ filterIsOpened,
                                                onSelectClick,
                                                onSelectAllClick,
                                                onCheckboxSelect,
                                                selectAllText,
                                                selectedOptions,
                                                optionsArray }) => {

  const optionsLength = useMemo(() => optionsArray.length, [optionsArray])
  const selectedOptionsLength = useMemo(() => selectedOptions.length, [selectedOptions])

  return (
    <FilterWrapper selectIsOpened={filterIsOpened}>
      <SelectWrapper onClick={onSelectClick}>
        <StyledSelect selectIsOpened={filterIsOpened}>
          <option>{selectedOptionsLength === optionsLength ? selectAllText : selectedOptions.join(', ')}</option>
        </StyledSelect>
        <ElementToHideDefaultOption/>
      </SelectWrapper>

    { filterIsOpened ?
      <CheckboxesWrapper>
        <ButtonSelectAll onClick={onSelectAllClick}>
          {selectedOptionsLength === optionsLength ? 'Отменить все' : 'Выбрать все'}
        </ButtonSelectAll>

        {optionsArray.map((value) => {
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

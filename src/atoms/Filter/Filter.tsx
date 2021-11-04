import React, { useMemo } from 'react';

import { IFilterProps } from 'mock';
import { StyledSelect, FilterWrapper, ElementToHideDefaultOption, CheckboxesWrapper, ButtonSelectAll, Option, OptionCheckbox, SelectWrapper } from './styled';
import { Checkmark } from '../Checkmark';

export interface FilterProps {
  filterIsOpened: boolean,
  selectAllText: string,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  optionsArray: IFilterProps[],
}

export const Filter: React.FC<FilterProps> = ({ filterIsOpened,
                                                onSelectClick,
                                                onSelectAllClick,
                                                onCheckboxSelect,
                                                selectAllText,
                                                optionsArray }) => {

  const isAllSelected = useMemo<boolean>(() => optionsArray.every(({isChecked}) => isChecked), [optionsArray])

  return (
    <FilterWrapper selectIsOpened={filterIsOpened}>
      <SelectWrapper onClick={onSelectClick}>
        <StyledSelect selectIsOpened={filterIsOpened}>
          <option>
            { isAllSelected
              ? selectAllText
              : optionsArray.filter(({ isChecked }) => !isChecked).map(({value}) => value).join(', ')
            }
          </option>
        </StyledSelect>
        <ElementToHideDefaultOption/>
      </SelectWrapper>

    { filterIsOpened ?
      <CheckboxesWrapper>
        <ButtonSelectAll onClick={onSelectAllClick}>
          { isAllSelected  ? 'Отменить все' : 'Выбрать все'}
        </ButtonSelectAll>

        {optionsArray.map(({label, value, isChecked}) => {
          return <Option key={label} htmlFor={label}>
            <OptionCheckbox type='checkbox'
                            id={label}
                            onChange={onCheckboxSelect}
                            checked={isChecked}
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

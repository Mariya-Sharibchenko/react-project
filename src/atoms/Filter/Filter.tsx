import React, { useMemo } from 'react';

import { IFilterProps } from 'context/interfaces';
import { StyledSelect, StyledFilter, FilterWrapper, StyledFilterTitle, CheckboxesWrapper, ButtonSelectAll, Option, OptionCheckbox } from './styled';
import { Checkmark } from '../Checkmark';

export interface IFilterComponentProps {
  filterData: IFilterProps,
  filterIsOpened: boolean,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Filter: React.FC<IFilterComponentProps> = ({ filterIsOpened,
                                                onSelectClick,
                                                onSelectAllClick,
                                                onCheckboxSelect,
                                                filterData }) => {

  const { filterTitle, selectAllText, optionsArray } = filterData;

  const isAllSelected = useMemo<boolean>(() => optionsArray.every(({isChecked}) => isChecked), [optionsArray]);

  return (
    <FilterWrapper>
      <StyledFilterTitle>{filterTitle}</StyledFilterTitle>

      <StyledFilter selectIsOpened={filterIsOpened}>

        <StyledSelect selectIsOpened={filterIsOpened} onClick={onSelectClick}>
          { isAllSelected
            ? selectAllText
            : optionsArray.filter(({ isChecked }) => isChecked).map(({value}) => value).join(', ')
          }
        </StyledSelect>

        { filterIsOpened &&
        <CheckboxesWrapper>
          <ButtonSelectAll onClick={onSelectAllClick}>
            { isAllSelected  ? 'Отменить все' : 'Выбрать все'}
          </ButtonSelectAll>

          {optionsArray.map(({label, value, isChecked}) =>
            <Option key={label} htmlFor={label}>
              <OptionCheckbox type='checkbox'
                              id={label}
                              onChange={onCheckboxSelect}
                              checked={isChecked}
              />
              <Checkmark/>
              {value}
            </Option>)}
        </CheckboxesWrapper>
        }
      </StyledFilter>
    </FilterWrapper>
  )
};

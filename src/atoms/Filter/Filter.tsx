import React, { useMemo } from 'react';

import { IFilterOptionsProps } from 'context/interfaces';
import {
  StyledSelect,
  StyledFilter,
  FilterWrapper,
  StyledFilterTitle,
  CheckboxesWrapper,
  ButtonSelectAll,
  Option,
} from './styled';

export interface IFilterComponentProps {
  filterTitle: string,
  selectAllText: string,
  optionsArray: IFilterOptionsProps[],
  filterIsOpened: boolean,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Filter: React.FC<IFilterComponentProps> = ({
  filterIsOpened,
  onSelectClick,
  onSelectAllClick,
  onCheckboxSelect,
  filterTitle,
  selectAllText,
  optionsArray,
}) => {

  const isAllSelected = useMemo<boolean>(() => optionsArray.every(({ isChecked }) => isChecked), [ optionsArray ]);

  return (
    <FilterWrapper>
      <StyledFilterTitle>{filterTitle}</StyledFilterTitle>

      <StyledFilter selectIsOpened={filterIsOpened}>

        <StyledSelect
          selectIsOpened={filterIsOpened}
          onClick={onSelectClick}
        >
          {isAllSelected
            ? selectAllText
            : optionsArray.filter(({ isChecked }) => isChecked)
                          .map(({ value }) => value)
                          .join(', ')
          }
        </StyledSelect>

        {filterIsOpened &&
        <CheckboxesWrapper>
          <ButtonSelectAll onClick={onSelectAllClick}>
            {isAllSelected ? 'Отменить все' : 'Выбрать все'}
          </ButtonSelectAll>

          {optionsArray.map(({ label, value, isChecked }) =>
            <Option
              key={label}
              label={label}
              value={value}
              isChecked={isChecked}
              onCheckboxSelect={onCheckboxSelect}
            />
          )}
        </CheckboxesWrapper>
        }
      </StyledFilter>
    </FilterWrapper>
  );
};

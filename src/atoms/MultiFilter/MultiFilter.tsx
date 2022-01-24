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

export interface IMultiFilterComponentProps {
  filterTitle: string,
  selectAllText: string,
  optionsArray: IFilterOptionsProps[],
  filterIsOpened: boolean,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export const MultiFilter: React.FC<IMultiFilterComponentProps> = ({
  filterIsOpened,
  onSelectClick,
  onSelectAllClick,
  onCheckboxSelect,
  filterTitle,
  selectAllText,
  optionsArray,
}) => {

  const isAllSelected = useMemo<boolean>(() => optionsArray.every(({ isChecked }) => isChecked), [ optionsArray ]);

  const selectedOptionsText = useMemo<string>(() =>
    optionsArray.reduce((acc, item) => {
      if (item.isChecked) {
        return acc.length === 0 ? acc + `${item.value}` : acc + `, ${item.value}`
      }
      return acc
    }, '')
  , [ optionsArray ])

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
            : selectedOptionsText
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

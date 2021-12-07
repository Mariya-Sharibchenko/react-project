import React, { useMemo } from 'react';

import { IFilterProps } from 'context/interfaces';
import { StyledSelect, FilterWrapper, CheckboxesWrapper, ButtonSelectAll, Option, OptionCheckbox } from './styled';
import { Checkmark } from '../Checkmark';

export interface IFilterComponentProps {
  filterIsOpened: boolean,
  selectAllText: string,
  onSelectClick: () => void,
  onSelectAllClick: () => void,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  optionsArray: IFilterProps[],
}

export const Filter: React.FC<IFilterComponentProps> = ({ filterIsOpened,
                                                onSelectClick,
                                                onSelectAllClick,
                                                onCheckboxSelect,
                                                selectAllText,
                                                optionsArray }) => {

  const isAllSelected = useMemo<boolean>(() => optionsArray.every(({isChecked}) => isChecked), [optionsArray])

  return (
    <FilterWrapper selectIsOpened={filterIsOpened}>
      <StyledSelect selectIsOpened={filterIsOpened} onClick={onSelectClick}>
        { isAllSelected
          ? selectAllText
          : optionsArray.filter(({ isChecked }) => isChecked).map(({value}) => value).join(', ')
        }
      </StyledSelect>

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

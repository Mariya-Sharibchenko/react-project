import React from 'react';

import { IFilterOptionsProps } from 'context/interfaces';
import {
  StyledFilter,
  FilterWrapper,
  StyledFilterTitle,
  OptionsWrapper,
  Option,
} from './styled';

export interface IFilterComponentProps {
  filterTitle: string,
  optionsArray: IFilterOptionsProps[],
  filterIsOpened: boolean,
  onOpenFilterClick: () => void,
  onOptionSelect: React.MouseEventHandler<HTMLLIElement>,
}

export const Filter: React.FC<IFilterComponentProps> = ({
  filterIsOpened,
  onOpenFilterClick,
  onOptionSelect,
  filterTitle,
  optionsArray,
}) => {

  return (
    <FilterWrapper>
      <StyledFilterTitle
        selectIsOpened={filterIsOpened}
        onClick={onOpenFilterClick}
      >
        {filterTitle}
      </StyledFilterTitle>

      <StyledFilter selectIsOpened={filterIsOpened}>
        {filterIsOpened &&
        <OptionsWrapper>
          {optionsArray.map(({ label, value, isChecked }) =>
            <Option
              key={label}
              data-value={value}
              isChecked={isChecked}
              onClick={onOptionSelect}
            >
              {label}
            </Option>
          )}
        </OptionsWrapper>
        }
      </StyledFilter>
    </FilterWrapper>
  );
};

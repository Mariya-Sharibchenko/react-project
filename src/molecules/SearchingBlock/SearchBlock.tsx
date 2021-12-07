import React from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Button';
import { FilterContainer } from 'atoms/Filter/FilterContainer';
import {
  HideFiltersButtonText,
  IFilterProps,
  SearchButtonText,
  SearchInputPlaceholder,
  ShowFiltersButtonText
} from 'context';

import {
  OpenFiltersBtn,
  CloseFiltersBtn,
  StyledFiltersListWrapper,
  StyledFiltersWrapper,
  StyledSearchBlock,
  StyledSearchWrapper, StyledFilterItemWrapper
} from './styled';

export interface ISearchBlockProps {
  isFiltersBlockOpened: boolean,
  filtersArray: IFilterProps[],
  onSearchInputChange: () => void,
  onSearchClick: () => void,
  onOpenFiltersClick: () => void,
  onCloseFiltersClick: () => void
}

export const SearchBlock: React.FC<ISearchBlockProps> = ({ isFiltersBlockOpened, filtersArray, onSearchInputChange, onSearchClick, onOpenFiltersClick,  onCloseFiltersClick}) => {
  return (
    <StyledSearchBlock>
      <StyledSearchWrapper isFiltersBlockOpened={isFiltersBlockOpened}>
        <SearchInput placeholderText={SearchInputPlaceholder} onChange={onSearchInputChange}/>

        <OpenFiltersBtn text={ShowFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened} onClick={onOpenFiltersClick}/>

        <Button text={SearchButtonText} onClick={onSearchClick}/>
      </StyledSearchWrapper>

      { isFiltersBlockOpened &&
        <StyledFiltersWrapper>
          <StyledFiltersListWrapper>
            {filtersArray.map((item) =>
              <StyledFilterItemWrapper key={item.filterTitle}>
                <FilterContainer filterData={item}/>
              </StyledFilterItemWrapper>)
            }
          </StyledFiltersListWrapper>

          <CloseFiltersBtn text={HideFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened} onClick={onCloseFiltersClick}/>
        </StyledFiltersWrapper>
      }
    </StyledSearchBlock>
  )
};

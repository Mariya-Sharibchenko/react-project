import React from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Button';
import { FilterContainer } from 'atoms/Filter/FilterContainer';
import {
  HideFiltersButtonText, IFilterDataProps,
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
  searchInputValue: string,
  onSearchInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  getFiltersOptions: (options: IFilterDataProps[]) => void,
  onSearchClick: () => void,
  onOpenFiltersClick: () => void,
  onCloseFiltersClick: () => void
}

export const SearchBlock: React.FC<ISearchBlockProps> = ({
                                                           isFiltersBlockOpened,
                                                           filtersArray,
                                                           searchInputValue,
                                                           onSearchInputChange,
                                                           getFiltersOptions,
                                                           onSearchClick,
                                                           onOpenFiltersClick,
                                                           onCloseFiltersClick
                                                         }) => {
  return (
    <StyledSearchBlock>
      <StyledSearchWrapper isFiltersBlockOpened={isFiltersBlockOpened}>
        <SearchInput placeholderText={SearchInputPlaceholder} onChange={onSearchInputChange}
                     inputValue={searchInputValue}/>

        <OpenFiltersBtn text={ShowFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened}
                        onClick={onOpenFiltersClick}/>

        <Button text={SearchButtonText} onClick={onSearchClick}/>
      </StyledSearchWrapper>

      {isFiltersBlockOpened &&
      <StyledFiltersWrapper>
        <StyledFiltersListWrapper>
          {filtersArray.map((item) =>
            <StyledFilterItemWrapper key={item.filterTitle}>
              <FilterContainer filterData={item} getOptions={getFiltersOptions}/>
            </StyledFilterItemWrapper>)
          }
        </StyledFiltersListWrapper>

        <CloseFiltersBtn text={HideFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened}
                         onClick={onCloseFiltersClick}/>
      </StyledFiltersWrapper>
      }
    </StyledSearchBlock>
  )
};

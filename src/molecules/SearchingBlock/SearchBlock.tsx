import React from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Button';
import { FilterContainer } from 'atoms/Filter/FilterContainer';
import { HideFiltersButtonText, SearchButtonText, ShowFiltersButtonText } from 'context';
import { FiltersArray } from 'mock';

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
}

export const SearchBlock: React.FC<ISearchBlockProps> = ({ isFiltersBlockOpened }) => {
  return (
    <StyledSearchBlock>
      <StyledSearchWrapper isFiltersBlockOpened={isFiltersBlockOpened}>
        <SearchInput placeholderText='fghj' onChange={console.log('sdfh')}/>

        <OpenFiltersBtn text={ShowFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened} onClick={console.log('df')}/>

        <Button text={SearchButtonText} onClick={console.log('df')}/>
      </StyledSearchWrapper>

      { isFiltersBlockOpened &&
        <StyledFiltersWrapper>
          <StyledFiltersListWrapper>
            {FiltersArray.map((item) =>
              <StyledFilterItemWrapper key={item.filterTitle}>
                <FilterContainer filterData={item} selectedAllText='all age'/>
              </StyledFilterItemWrapper>)
            }
          </StyledFiltersListWrapper>

          <CloseFiltersBtn text={HideFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened} onClick={console.log('df')}/>
        </StyledFiltersWrapper>
      }
    </StyledSearchBlock>
  )
};

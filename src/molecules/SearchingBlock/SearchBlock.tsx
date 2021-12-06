import React from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Button';
import { FilterContainer } from 'atoms/Filter/FilterContainer';
import { HideFiltersButtonText, SearchButtonText, ShowFiltersButtonText } from 'context';
import { FilterByAge, FilterByCourse } from 'mock';

import {
  OpenFiltersBtn,
  CloseFiltersBtn,
  StyledFiltersListWrapper,
  StyledFiltersWrapper,
  StyledSearchBlock,
  StyledSearchWrapper
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
            <FilterContainer optionsArray={FilterByAge} selectedAllText='all age'/>
            <FilterContainer optionsArray={FilterByCourse} selectedAllText='all marks'/>
            <FilterContainer optionsArray={FilterByAge} selectedAllText='all age'/>
            <FilterContainer optionsArray={FilterByCourse} selectedAllText='all languages'/>
          </StyledFiltersListWrapper>

          <CloseFiltersBtn text={HideFiltersButtonText} isFiltersBlockOpened={isFiltersBlockOpened} onClick={console.log('df')}/>
        </StyledFiltersWrapper>
      }
    </StyledSearchBlock>
  )
};

import React from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Button';
import { SearchButtonText, ShowFiltersButtonText } from 'context';

import {
  OpenFiltersBtn,
  StyledFiltersListWrapper,
  StyledFiltersWrapper,
  StyledSearchBlock,
  StyledSearchWrapper
} from './styled';
import { FilterContainer } from '../../atoms/Filter/FilterContainer';
import { FilterByAge, FilterByCourse } from 'mock';

export const SearchBlock: React.FC = () => {
  return (
    <StyledSearchBlock>
      <StyledSearchWrapper isFiltersBlockOpened={true}>
        <SearchInput placeholderText='fghj' onChange={console.log('sdfh')}/>

        <OpenFiltersBtn text={ShowFiltersButtonText} isFiltersBlockOpened={true}/>

        <Button text={SearchButtonText}/>
      </StyledSearchWrapper>

      <StyledFiltersWrapper isFiltersBlockOpened={true}>
        <StyledFiltersListWrapper>
          <FilterContainer optionsArray={FilterByAge} selectedAllText='all age'/>
          <FilterContainer optionsArray={FilterByCourse} selectedAllText='all marks'/>
          <FilterContainer optionsArray={FilterByAge} selectedAllText='all age'/>
          <FilterContainer optionsArray={FilterByCourse} selectedAllText='all languages'/>
        </StyledFiltersListWrapper>

      </StyledFiltersWrapper>
    </StyledSearchBlock>
  )
};

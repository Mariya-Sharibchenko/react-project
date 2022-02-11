import React, { useCallback, useEffect, useState } from 'react';

import { SearchInput } from 'atoms/SearchInput';
import { Button } from 'atoms/Buttons';
import { MultiFilterContainer } from 'atoms/MultiFilter/MultiFilterContainer';
import {
  HideFiltersButtonText,
  IMultiFilterProps,
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
  filtersArray: IMultiFilterProps[],
  searchInputValue: string,
  onSearchInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  getFiltersOptions: (filtersData: IMultiFilterProps[]) => void,
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

  const [ allOptions, setAllOptions ] = useState<IMultiFilterProps[]>(filtersArray);

  const getAllOptions = useCallback((filterData: IMultiFilterProps) => {
    setAllOptions(prevState =>
      prevState.map((item) =>
        item.id === filterData.id ? {...item, optionsArray: filterData.optionsArray} : item
      )
    );
  }, []);

  useEffect(() => {
    getFiltersOptions(allOptions);
  }, [allOptions]);

  return (
    <StyledSearchBlock>
      <StyledSearchWrapper isFiltersBlockOpened={isFiltersBlockOpened}>
        <SearchInput
          placeholderText={SearchInputPlaceholder}
          onChange={onSearchInputChange}
          inputValue={searchInputValue}
        />

        <OpenFiltersBtn
          text={ShowFiltersButtonText}
          isFiltersBlockOpened={isFiltersBlockOpened}
          onClick={onOpenFiltersClick}
        />

        <Button text={SearchButtonText} onClick={onSearchClick} />
      </StyledSearchWrapper>

      { isFiltersBlockOpened &&
      <StyledFiltersWrapper>
        <StyledFiltersListWrapper>
          {filtersArray.map((item) =>
            <StyledFilterItemWrapper key={item.filterTitle}>
              <MultiFilterContainer filterData={item} getOptions={getAllOptions} />
            </StyledFilterItemWrapper>)
          }
        </StyledFiltersListWrapper>

        <CloseFiltersBtn
          text={HideFiltersButtonText}
          isFiltersBlockOpened={isFiltersBlockOpened}
          onClick={onCloseFiltersClick}
        />
      </StyledFiltersWrapper>
      }
    </StyledSearchBlock>
  );
};

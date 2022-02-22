import React, { useCallback, useEffect, useState } from 'react';

import { SearchInput, MultiFilterContainer } from 'atoms';
import {
  HideFiltersButtonText,
  IMultiFilterProps,
  SearchButtonText,
  SearchInputPlaceholder,
  ShowFiltersButtonText,
  WindowSize
} from 'context';
import {
  OpenFiltersBtn,
  CloseFiltersBtn,
  StyledFiltersListWrapper,
  StyledFiltersWrapper,
  StyledSearchBlock,
  StyledSearchWrapper, StyledFilterItemWrapper, SearchButton
} from './styled';
import { useWindowSize } from 'utils/getWindowSize';

const { tablet } = WindowSize;

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
  const windowSize = useWindowSize();

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
      { windowSize && windowSize.width > tablet ?
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

          <SearchButton text={SearchButtonText} onClick={onSearchClick} />
        </StyledSearchWrapper> :

        <>
          <StyledSearchWrapper isFiltersBlockOpened={isFiltersBlockOpened}>
            <SearchInput
              placeholderText={SearchInputPlaceholder}
              onChange={onSearchInputChange}
              inputValue={searchInputValue}
            />

            <SearchButton text={SearchButtonText} onClick={onSearchClick} />
          </StyledSearchWrapper>

          {!isFiltersBlockOpened &&
            <OpenFiltersBtn
              text={ShowFiltersButtonText}
              isFiltersBlockOpened={isFiltersBlockOpened}
              onClick={onOpenFiltersClick}
            />
          }
        </>
      }

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

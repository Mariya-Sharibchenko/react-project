import React, { useState } from 'react';

import { SearchBlock } from './SearchBlock';
import { IMultiFilterProps } from 'context';

interface ISearchBlockContainerProps {
  filtersArray: IMultiFilterProps[],
  onSearch: (searchInputValue: string, filtersData: IMultiFilterProps[] | undefined) => void,
}

export const SearchBlockContainer: React.FC<ISearchBlockContainerProps> = ({filtersArray, onSearch}) => {
  const [ isFiltersBlockOpened, setIsFiltersBlockOpened] = useState<boolean>(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ filtersData, setFiltersData ] = useState<IMultiFilterProps[] | undefined>();

  const onSearchInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(evt.target.value)
  };

  const onOpenFiltersClick = () => setIsFiltersBlockOpened(true);

  const onCloseFiltersClick = () => setIsFiltersBlockOpened(false);

  const getFiltersData = (filtersData: IMultiFilterProps[]) => {
    setFiltersData(filtersData)
  };

  const onSearchClick = () => {
    onSearch(searchInputValue, filtersData)
  }

  return (
    <SearchBlock
      isFiltersBlockOpened={isFiltersBlockOpened}
      filtersArray={filtersArray}
      onOpenFiltersClick={onOpenFiltersClick}
      onCloseFiltersClick={onCloseFiltersClick}
      onSearchInputChange={onSearchInputChange}
      searchInputValue={searchInputValue}
      getFiltersOptions={getFiltersData}
      onSearchClick={onSearchClick}
    />
  )
};

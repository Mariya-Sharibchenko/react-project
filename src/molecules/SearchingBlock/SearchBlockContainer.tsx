import React, { useEffect, useState } from 'react';

import { SearchBlock } from './SearchBlock';
import { IMultiFilterProps } from 'context';

interface ISearchBlockContainerProps {
  filtersArray: IMultiFilterProps[],
  onSearch: (searchInputValue: string, filtersData: IMultiFilterProps[]) => void,
  setFilters: (filtersData: IMultiFilterProps[]) => void,
}

export const SearchBlockContainer: React.FC<ISearchBlockContainerProps> = ({
  filtersArray,
  onSearch,
  setFilters
}) => {
  const [ isFiltersBlockOpened, setIsFiltersBlockOpened] = useState<boolean>(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ filtersData, setFiltersData ] = useState<IMultiFilterProps[]>(filtersArray);

  useEffect(() => {
    setFiltersData(filtersArray);

  }, [ filtersArray ]);

  useEffect(() => {
    setFilters(filtersData);

  }, [ filtersData ]);

  const onSearchInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(evt.target.value);
  };

  const onOpenFiltersClick = () => setIsFiltersBlockOpened(true);

  const onCloseFiltersClick = () => setIsFiltersBlockOpened(false);

  const getFiltersData = (filtersData: IMultiFilterProps[]) => {
    setFiltersData(filtersData);
  };

  const onSearchClick = () => {
    onSearch(searchInputValue, filtersData);
  };

  return (
    <SearchBlock
      isFiltersBlockOpened={isFiltersBlockOpened}
      filtersArray={filtersData}
      onOpenFiltersClick={onOpenFiltersClick}
      onCloseFiltersClick={onCloseFiltersClick}
      onSearchInputChange={onSearchInputChange}
      searchInputValue={searchInputValue}
      getFiltersOptions={getFiltersData}
      onSearchClick={onSearchClick}
    />
  );
};

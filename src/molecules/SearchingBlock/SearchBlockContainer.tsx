import React, { useCallback, useEffect, useState } from 'react';

import { SearchBlock } from './SearchBlock';
import { IMultiFilterProps } from 'context';

interface ISearchBlockContainerProps {
  filtersArray: IMultiFilterProps[],
  onSearch: (searchInputValue: string, filtersData: IMultiFilterProps[]) => void,
  setOptions: (filtersData: IMultiFilterProps[]) => void,
}

export const SearchBlockContainer: React.FC<ISearchBlockContainerProps> = ({
  filtersArray,
  onSearch,
  setOptions
}) => {
  const [ isFiltersBlockOpened, setIsFiltersBlockOpened] = useState<boolean>(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ filtersData, setFiltersData ] = useState<IMultiFilterProps[]>(filtersArray);

  useEffect(() => {
    setFiltersData(filtersArray);

  }, [ filtersArray ]);

  useEffect(() => {
    setOptions(filtersData);

  }, [ filtersData ]);

  const onSearchInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(evt.target.value);
  }, []);

  const onOpenFiltersClick = useCallback(() => setIsFiltersBlockOpened(true), []);

  const onCloseFiltersClick = useCallback(() => setIsFiltersBlockOpened(false), []);

  const getFiltersData = useCallback((filtersData: IMultiFilterProps[]) => {
    setFiltersData(filtersData);
  }, []);

  const onSearchClick = useCallback(() => onSearch(searchInputValue, filtersData), [searchInputValue, filtersData]);

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

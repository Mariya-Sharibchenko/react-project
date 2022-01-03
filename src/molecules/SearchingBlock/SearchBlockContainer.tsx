import React, { useState } from 'react';

import { SearchBlock } from './SearchBlock';
import { IFilterProps } from 'context';

interface ISearchBlockContainerProps {
  filtersArray: IFilterProps[],
  onSearch: (searchInputValue: string, filtersData: IFilterProps[] | undefined) => void,
}

export const SearchBlockContainer: React.FC<ISearchBlockContainerProps> = ({filtersArray, onSearch}) => {
  const [ isFiltersBlockOpened, setIsFiltersBlockOpened] = useState<boolean>(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ filtersData, setFiltersData ] = useState<IFilterProps[] | undefined>();

  const onSearchInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(evt.target.value)
  };

  const onOpenFiltersClick = () => setIsFiltersBlockOpened(true);

  const onCloseFiltersClick = () => setIsFiltersBlockOpened(false);

  const getFiltersData = (filtersData: IFilterProps[]) => {
    setFiltersData(filtersData)
  };

  const onSearchClick = () => {
    onSearch(searchInputValue, filtersData)
  }

  return (
    <SearchBlock isFiltersBlockOpened={isFiltersBlockOpened}
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

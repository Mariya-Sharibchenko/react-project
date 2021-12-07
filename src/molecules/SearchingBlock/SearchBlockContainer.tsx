import React, { useState } from 'react';

import { SearchBlock } from './SearchBlock';
import { IFilterDataProps, IFilterProps } from 'context';

interface ISearchBlockContainerProps {
  filtersArray: IFilterProps[],
  onSearch: (searchInputValue: string, options: IFilterDataProps[] | undefined) => void,
}

export const SearchBlockContainer: React.FC<ISearchBlockContainerProps> = ({filtersArray, onSearch}) => {
  const [ isFiltersBlockOpened, setIsFiltersBlockOpened] = useState<boolean>(false);
  const [ searchInputValue, setSearchInputValue ] = useState<string>('');
  const [ options, setFiltersOptions ] = useState<IFilterDataProps[] | undefined>();

  const onSearchInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(evt.target.value)
  };

  const onOpenFiltersClick = () => setIsFiltersBlockOpened(true);

  const onCloseFiltersClick = () => setIsFiltersBlockOpened(false);

  const getFiltersOptions = (options: IFilterDataProps[]) => {
    setFiltersOptions(options)
  };

  const onSearchClick = () => {
    onSearch(searchInputValue, options)
  }

  return (
    <SearchBlock isFiltersBlockOpened={isFiltersBlockOpened}
                 filtersArray={filtersArray}
                 onOpenFiltersClick={onOpenFiltersClick}
                 onCloseFiltersClick={onCloseFiltersClick}
                 onSearchInputChange={onSearchInputChange}
                 searchInputValue={searchInputValue}
                 getFiltersOptions={getFiltersOptions}
                 onSearchClick={onSearchClick}
    />
  )
};

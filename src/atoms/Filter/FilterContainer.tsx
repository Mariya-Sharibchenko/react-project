import React, { useState, useEffect } from 'react';

import { Filter } from './Filter';
import { IFilterProps, IFilterOptionsProps } from 'context/interfaces';

interface IFilterContainerProps {
  filterData: IFilterProps,
  getOptions: (options: IFilterProps) => void,
}

export const FilterContainer: React.FC<IFilterContainerProps> = ({
  filterData,
  getOptions
}) => {
  const { filterTitle, optionsArray } = filterData;

  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<IFilterOptionsProps[]>(optionsArray);

  useEffect(() => {
    getOptions({...filterData, optionsArray: options})
  }, [options]);

  const onOpenFilterClick = () => {
    setFilterIsOpened(prevState => !prevState)
  }

  const onOptionSelect: React.MouseEventHandler<HTMLLIElement> = (evt ) => {
    const target = evt.target as HTMLLIElement
    const value = target.dataset.value

    setOptions(prevState =>
      prevState.map((el) =>
        el.label === value
        ? {...el, isChecked: true}
        : {...el, isChecked: false}
      )
    )
  }

  return (
    <Filter
      filterIsOpened={filterIsOpened}
      onOptionSelect={onOptionSelect}
      onOpenFilterClick={onOpenFilterClick}
      filterTitle={filterTitle}
      optionsArray={options}
    />
  )
};

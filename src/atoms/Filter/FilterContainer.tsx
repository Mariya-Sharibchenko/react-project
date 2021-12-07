import React, { useState, useEffect } from 'react';

import { Filter } from './Filter';
import { IFilterProps, IFilterDataProps } from 'context/interfaces';

interface IFilterContainerProps {
  filterData: IFilterProps,
  getOptions: (options: IFilterDataProps[]) => void,
}

export const FilterContainer: React.FC<IFilterContainerProps> = ({filterData, getOptions}) => {
  const { filterTitle, selectAllText, optionsArray } = filterData;

  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<IFilterDataProps[]>(optionsArray);

  useEffect(() => {
    getOptions(options)
  }, [options]);

  const onSelectClick = () => {
    if (filterIsOpened && options.every(({isChecked}) => !isChecked)) {

      setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: true}
        })
      )
    }

    setFilterIsOpened(prevState => !prevState)
  }

  const onSelectAllClick = () => {
    options.every(({isChecked}) => isChecked)
      ? setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: false}
        })
      )
      : setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: true}
        })
      )
  }

  const onCheckboxSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.id.toString()
    setOptions(prevState =>
      prevState.map((el) =>
        el.label === inputValue
          ? {...el, isChecked: !el.isChecked}
          : el
      )
    )
  }

  return (
    <Filter filterIsOpened={filterIsOpened}
            onCheckboxSelect={onCheckboxSelect}
            onSelectAllClick={onSelectAllClick}
            onSelectClick={onSelectClick}
            filterTitle={filterTitle}
            selectAllText={selectAllText}
            optionsArray={options}
    />
  )
};

import React, { useMemo, useState } from 'react';

import { Filter } from './Filter';
import { IFilterProps } from 'mock';

interface FilterContainerProps {
  optionsArray: IFilterProps[],
  selectedAllText: string,
}

export const FilterContainer: React.FC<FilterContainerProps> = ({optionsArray, selectedAllText}) => {
  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<IFilterProps[]>(optionsArray);

  const isAllSelected = useMemo<boolean>(() => options.every(({isChecked}) => isChecked), [options])

  const onSelectClick = () => {
    if (filterIsOpened && !isAllSelected) {

      setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: true}
        })
      )
    }

    setFilterIsOpened(prevState => !prevState)
  }

  const onSelectAllClick = () => {
    isAllSelected
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
        el.value === inputValue
          ? {...el, isChecked: true}
          : {...el, isChecked: false}
      )
    )
  }

  return (
    <Filter filterIsOpened={filterIsOpened}
            onCheckboxSelect={onCheckboxSelect}
            onSelectAllClick={onSelectAllClick}
            onSelectClick={onSelectClick}
            selectAllText={selectedAllText}
            optionsArray={options}
    />
  )
};
import React, { useState } from 'react';

import { Filter } from './Filter';
import { IFilterProps } from 'context/interfaces';

interface FilterContainerProps {
  optionsArray: IFilterProps[],
  selectedAllText: string,
}

export const FilterContainer: React.FC<FilterContainerProps> = ({optionsArray, selectedAllText}) => {
  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<IFilterProps[]>(optionsArray);

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
            selectAllText={selectedAllText}
            optionsArray={options}
    />
  )
};
import React, { useState } from 'react';

import { Filter } from './Filter';
import { FilterByCourse } from 'mock';

export const FilterContainer: React.FC = () => {
  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ allOptionsAreSelected, setAllOptionsAreSelected ] = useState<boolean>(true);
  const [ selectedOptions, setSelectedOptions] = useState<string[]>(FilterByCourse);

  const onSelectClick = () => {
    if (filterIsOpened && selectedOptions.length === 0) {
      setAllOptionsAreSelected(true)
      setSelectedOptions(FilterByCourse)
    }

    setFilterIsOpened(prevState => !prevState)
  }

  const onSelectAllClick = () => {
    allOptionsAreSelected
      ? setSelectedOptions([])
      : setSelectedOptions(FilterByCourse)

    setAllOptionsAreSelected(prevState => !prevState)
  }

  const onCheckboxSelect = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.id.toString()
    setSelectedOptions(prevState =>
      prevState.includes(inputValue)
        ? prevState.filter(el => el !== inputValue)
        : [...prevState, inputValue]
    )
  }

  return (
    <Filter filterIsOpened={filterIsOpened}
            onCheckboxSelect={onCheckboxSelect}
            onSelectAllClick={onSelectAllClick}
            onSelectClick={onSelectClick}
            selectAllText='Все курсы'
            selectedOptions={selectedOptions}
            optionsArray={FilterByCourse}
    />
  )
};
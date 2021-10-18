import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { Colors, IFilterOptionsProps } from 'context';
import './Filter.css'
import arrowUp from 'public/arrow-up-icon.svg';
import arrowDown from 'public/arrow-down-icon.svg';

const { mainText, secondaryText, filterBackground, secondaryColor, mainColor } = Colors;

export interface FilterProps {
  selectAllText: string,
  optionsArray: Array<IFilterOptionsProps>,
}

interface SelectProps {
  selectIsOpened: boolean
}

const StiledSelect = styled.select<SelectProps>`
  width: 253px;
  height: 49px;
  color: ${({selectIsOpened}) => selectIsOpened ? mainText : secondaryText};
  padding: 12px 15px;
  font-size: 14px;
  border: 0;
  border-bottom: ${({selectIsOpened}) => selectIsOpened 
          ? `2px solid ${mainColor}` 
          : `1px solid ${secondaryText}`};
  -moz-appearance: none; 
  -webkit-appearance: none; 
  appearance: none;
  position: relative;
  background: ${({selectIsOpened}) => selectIsOpened 
          ? `right 15px center no-repeat ${`url(${arrowUp})`} ${secondaryColor}` 
          : `right 15px center no-repeat ${`url(${arrowDown})`} ${filterBackground}`};
  background-size: 24px;
  
  
  &:focus, &:active {
    outline: none;
    border-bottom: 1px solid ${secondaryText};
  }
`;

export const Filter: React.FC<FilterProps> = ({selectAllText, optionsArray }) => {
  const options = optionsArray.reduce((acc, { value }) => {
    return [...acc, `${value}`]

  }, [] as string[]);

  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ allOptionsAreSelected, setAllOptionsAreSelected ] = useState<boolean>(true);
  const [ selectedOptions, setSelectedOptions] = useState<string[]>(options);

  useEffect(() => {
    selectedOptions.length === optionsArray.length
      ? setAllOptionsAreSelected(true)
      : setAllOptionsAreSelected(false)

  }, [selectedOptions, allOptionsAreSelected])

  const onSelectClick = () => {
    if (filterIsOpened && selectedOptions.length === 0) {
      setAllOptionsAreSelected(true)
      setSelectedOptions(options)
    }

    setFilterIsOpened(prevState => !prevState)
  }

  const onSelectAllClick = () => {
    allOptionsAreSelected
      ? setSelectedOptions([])
      : setSelectedOptions(options)

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
    <div className={filterIsOpened ? "filter__wrapper filter__wrapper_opened" : "filter__wrapper filter__wrapper_closed"}>
      <div className="filter__select-wrapper"
         onClick={onSelectClick}
      >
        <StiledSelect selectIsOpened={filterIsOpened}>
          <option>{selectedOptions.length === optionsArray.length ? selectAllText : selectedOptions.join(', ')}</option>
        </StiledSelect>
        <div className="hide-option"></div>
    </div>

    { filterIsOpened ?
      <div className="filter__checkboxes">
        <button className="filter__btn-select-all" onClick={onSelectAllClick}>
          {allOptionsAreSelected ? 'Отменить все' : 'Выбрать все'}
        </button>

        {optionsArray.map(({value}) => {
          return <label key={value} htmlFor={value} className="filter__option">
            <input type='checkbox'
                   className="filter__option-checkbox"
                   id={value}
                   onChange={onCheckboxSelect}
                   checked={selectedOptions.includes(value)}
            />
            <div className="checkmark"></div>
            {value}
          </label>
        })}
      </div>
      : <></>
    }
    </div>
  )
};

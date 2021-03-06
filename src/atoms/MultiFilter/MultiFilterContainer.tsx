import React, { useState, useEffect, useCallback } from 'react';

import { MultiFilter } from './MultiFilter';
import { IMultiFilterProps, IFilterOptionsProps } from 'context/interfaces';

interface IMultiFilterContainerProps {
  filterData: IMultiFilterProps,
  getOptions: (options: IMultiFilterProps) => void,
}

export const MultiFilterContainer: React.FC<IMultiFilterContainerProps> = ({
  filterData,
  getOptions
}) => {
  const { filterTitle, selectAllText, optionsArray } = filterData;

  const [ filterIsOpened, setFilterIsOpened ] = useState<boolean>(false);
  const [ options, setOptions ] = useState<IFilterOptionsProps[]>(optionsArray);

  useEffect(() => {
    setOptions(optionsArray);

  }, [ optionsArray ]);

  useEffect(() => {
    getOptions({...filterData, optionsArray: options});
  }, [options]);

  const onSelectClick = useCallback(() => {
    if (filterIsOpened && options.every(({isChecked}) => !isChecked)) {

      setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: true};
        })
      );
    }

    setFilterIsOpened(prevState => !prevState);
  }, [filterIsOpened, options]);

  const onSelectAllClick = useCallback(() => {
    options.every(({isChecked}) => isChecked)
      ? setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: false};
        })
      )
      : setOptions(prevState => prevState.map(el => {
          return {...el, isChecked: true};
        })
      );
  }, [options]);

  const onCheckboxSelect = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.id.toString();
    setOptions(prevState =>
      prevState.map((el) =>
        el.label === inputValue
          ? {...el, isChecked: !el.isChecked}
          : el
      )
    );
  }, []);

  return (
    <MultiFilter
      filterIsOpened={filterIsOpened}
      onCheckboxSelect={onCheckboxSelect}
      onSelectAllClick={onSelectAllClick}
      onSelectClick={onSelectClick}
      filterTitle={filterTitle}
      selectAllText={selectAllText}
      optionsArray={options}
    />
  );
};

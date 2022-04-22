import React, { useCallback, useEffect, useState } from 'react';

import { SearchInput } from 'atoms';

interface ISearchInputContainer {
  placeholderText: string,
  getSearchInputText: (value: string) => void
}

export const SearchInputContainer: React.FC<ISearchInputContainer> = ({
  placeholderText,
  getSearchInputText
}) => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const onInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  }, []);

  useEffect(() => {
    getSearchInputText(inputValue);
  }, [inputValue]);

  return (
    <SearchInput
      placeholderText={placeholderText}
      onChange={onInputChange}
      inputValue={inputValue}
    />
  );
};

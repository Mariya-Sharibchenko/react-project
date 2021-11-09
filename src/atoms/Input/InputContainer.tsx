import React, { useEffect, useState } from 'react';

import { Input } from './Input';

interface InputContainerProps {
  placeholderText: string,
  labelText: string,
  type: string,
}

export const InputContainer: React.FC<InputContainerProps> = ({ labelText, placeholderText, type}) => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ isValidData, setIsValidData ] = useState<boolean>(true);

  useEffect(() => {
    inputValue.length !== 0 && !inputValue.split('').includes('@')
      ? setIsValidData(false)
      : setIsValidData(true)
  }, [inputValue])

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  return (
    <Input type={type}
           onChange={onInputChange}
           placeholderText={placeholderText}
           isValid={isValidData}
           inputValue={inputValue}
           labelText={labelText}
    />
  )
};

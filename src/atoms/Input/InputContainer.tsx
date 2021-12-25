import React, { useEffect, useState } from 'react';

import { IInputProps } from 'context';

import { Input } from './Input';

export const InputContainer: React.FC<IInputProps> = ({ labelText, placeholderText, type, validationFunction, className}) => {
  const [ inputValue, setInputValue ] = useState<string>('');
  const [ isValidData, setIsValidData ] = useState<boolean>(true);

  useEffect(() => {
    setIsValidData(validationFunction(inputValue))
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
           className={className}
    />
  )
};

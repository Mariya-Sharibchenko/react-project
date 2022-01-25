import React from 'react';

import { InputWrapper, LabelText, InputWithFilterWrapper, InputWithFilter, Arrow, OptionsWrapper } from './styled';
import { Option } from 'atoms/Filter/styled';
import { IFilteredInput } from './interface';

export const FilteredInput: React.FC<IFilteredInput> = ({
  isRequired,
  inputValue,
  isValid,
  labelText,
  placeholderText,
  isOpened,
  optionsArray,
  onOptionClick,
  onOpenOptionsClick,
}) => {

  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{labelText}</LabelText>

      <InputWithFilterWrapper onClick={onOpenOptionsClick}>
        <InputWithFilter
          type='text'
          isValid={isValid}
          value={inputValue}
          required={isRequired}
          placeholder={placeholderText}
          id={labelText}
          onClick={onOpenOptionsClick}
        />

        <Arrow isOpened={isOpened}/>

        {isOpened &&
          <OptionsWrapper>
            {optionsArray.map(({ label, value, isChecked }) =>
              <Option
                key={label}
                data-value={value}
                isChecked={isChecked}
                onClick={onOptionClick}
              >
                {label}
              </Option>
            )}
          </OptionsWrapper>
        }
      </InputWithFilterWrapper>
    </InputWrapper>
  )
};

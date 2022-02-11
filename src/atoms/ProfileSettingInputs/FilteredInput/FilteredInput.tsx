import React from 'react';

import { InputWrapper, LabelText, InputWithFilterWrapper, InputWithFilter, Arrow, OptionsWrapper } from '../styled';
import { Option } from 'atoms/Filter/styled';
import { IFilteredInputProps } from '../interface';

export const FilteredInput: React.FC<IFilteredInputProps> = ({
  isRequired,
  inputValue,
  isValid,
  inputId,
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

      <InputWithFilterWrapper>
        <InputWithFilter
          type='text'
          isValid={isValid}
          value={inputValue}
          required={isRequired}
          placeholder={placeholderText}
          id={inputId}
          onClick={onOpenOptionsClick}
        />

        <Arrow isOpened={isOpened} />

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
  );
};

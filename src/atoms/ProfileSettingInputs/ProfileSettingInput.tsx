import React from 'react';

import { Input, InputWrapper, LabelText, ISettingInputProps, ILabelTextProps } from './styled';

type ProfileSettingInputTypes = 'email' | 'tel' | 'text' | 'date' | 'url' | 'radio';

export interface IProfileSettingInput extends ISettingInputProps, ILabelTextProps{
  type: ProfileSettingInputTypes,
  placeholderText: string,
  inputValue: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export const ProfileSettingInput: React.FC<IProfileSettingInput> = ({
  isRequired,
  inputValue,
  type,
  isValid,
  placeholderText,
  onChange,
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>Образование</LabelText>

      <Input
        type={type}
        pattern='[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}'
        onChange={onChange}
        isValid={isValid}
        placeholder={placeholderText}
        required={isRequired}
        value={inputValue}
      />
    </InputWrapper>
  );
};

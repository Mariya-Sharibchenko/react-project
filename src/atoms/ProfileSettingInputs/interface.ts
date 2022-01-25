import React from 'react';

import { IInputProps, ILabelTextProps } from './styled';
import { IFilterOptionsProps } from 'context';

export interface IProfileSettingInput extends IInputProps, ILabelTextProps {
  labelText: string,
  placeholderText: string,
  inputValue: string,
}

export interface IFormattedInput extends IProfileSettingInput {
  maxLength: number,
  onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
}

export interface IFilteredInput extends IProfileSettingInput {
  isOpened: boolean,
  optionsArray: IFilterOptionsProps[],
  onOptionClick: React.MouseEventHandler<HTMLLIElement>,
  onOpenOptionsClick: () => void,
}

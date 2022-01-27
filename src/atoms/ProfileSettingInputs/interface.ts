import React from 'react';

import { IInputProps, ILabelTextProps } from './styled';
import { IFilterOptionsProps } from 'context';

export interface IProfileSettingInputProps extends IInputProps, ILabelTextProps {
  labelText: string,
  placeholderText: string,
  inputValue: string,
}

export interface IFormattedInputProps extends IProfileSettingInputProps {
  maxLength: number,
  onKeyDown: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
}

export interface IFilteredInputProps extends IProfileSettingInputProps {
  isOpened: boolean,
  optionsArray: IFilterOptionsProps[],
  onOptionClick: React.MouseEventHandler<HTMLLIElement>,
  onOpenOptionsClick: () => void,
}

export interface ISkillsInputProps extends IProfileSettingInputProps {
  addedSkillsArray: string[],
  matchedSkills: string[],
  onAddSkill: React.MouseEventHandler<HTMLLIElement>,
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

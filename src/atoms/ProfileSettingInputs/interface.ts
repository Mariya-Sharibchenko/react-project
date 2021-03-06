import React from 'react';

import { IInputProps, ILabelTextProps } from './styled';
import { IFilterOptionsProps, ProfileDataTypes } from 'context';

export interface IProfileSettingInputProps extends IInputProps, ILabelTextProps {
  inputId: ProfileDataTypes,
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
  onDeleteSkill: (skill: string) => void,
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface ITextInputProps extends IProfileSettingInputProps {
  isTextarea?: boolean,
  onInputChange: (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
}

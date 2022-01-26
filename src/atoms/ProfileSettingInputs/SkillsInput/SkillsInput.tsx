import React from 'react';

import { ISkillsInputProps } from '../interface';
import {
  Input,
  InputWrapper,
  LabelText,
  InputWithFilterWrapper,
  InputContent,
  OptionsWrapper,
  Option,
  SkillsList,
  SkillsItem
} from '../styled';

export const SkillsInput: React.FC<ISkillsInputProps> = ({
  isRequired,
  isValid,
  labelText,
  placeholderText,
  inputValue,
  onKeyDown,
  isMatched,
  skillsArray,
  matchedSkills,
  onAddSkill,
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{ labelText }</LabelText>

      <InputContent>
        <InputWithFilterWrapper>
          <Input
            type='text'
            onKeyDown={onKeyDown}
            isValid={isValid}
            placeholder={placeholderText}
            required={isRequired}
            value={inputValue}
            id={labelText}
          />

          {isMatched &&
            <OptionsWrapper>
              {matchedSkills.map(el =>
                <Option key={el}>
                  {el}
                </Option>
              )}
            </OptionsWrapper>
          }
        </InputWithFilterWrapper>

        <SkillsList>
          {skillsArray.map(el =>
            <SkillsItem key={el} onClick={onAddSkill}>
              {el}
            </SkillsItem>
          )}
        </SkillsList>
      </InputContent>
    </InputWrapper>
  )
};

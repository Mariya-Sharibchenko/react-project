import React from 'react';

import { FilterTag } from 'atoms/FilterTag';
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
  addedSkillsArray,
  matchedSkills,
  onAddSkill,
  onDeleteSkill,
  onInputChange,
}) => {
  return (
    <InputWrapper>
      <LabelText isRequired={isRequired}>{ labelText }</LabelText>

      <InputContent>
        <InputWithFilterWrapper>
          <Input
            type='text'
            isValid={isValid}
            placeholder={placeholderText}
            required={isRequired}
            value={inputValue}
            id={labelText}
            onChange={onInputChange}
          />

          {matchedSkills.length !== 0 &&
            <OptionsWrapper>
              {matchedSkills.map(el =>
                <Option key={el} data-value={el} onClick={onAddSkill}>
                  {el}
                </Option>
              )}
            </OptionsWrapper>
          }
        </InputWithFilterWrapper>

        <SkillsList>
          {addedSkillsArray.map(el =>
            <SkillsItem key={el}>
              <FilterTag text={el} onClick={onDeleteSkill}/>
            </SkillsItem>
          )}
        </SkillsList>
      </InputContent>
    </InputWrapper>
  )
};

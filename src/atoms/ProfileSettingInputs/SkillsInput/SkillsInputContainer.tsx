import React, { useEffect, useState } from 'react';

import { SkillsInput } from './SkillsInput';
import { IProfileSettingInputProps } from '../interface';
import { findSkills } from '../utils/findSkills';

export interface ISkillsInputContainerProps extends IProfileSettingInputProps {
  getSkills: (arr: string[]) => void,
  skillsArray: string[],
}

export const SkillsInputContainer: React.FC<ISkillsInputContainerProps> = ({
  labelText,
  placeholderText,
  inputValue,
  isValid,
  isRequired,
  skillsArray,
  getSkills,
}) => {
  const [ skills, setSkills] = useState<string[]>([]);
  const [ matchedSkills, setMatchedSkills ] = useState<string[]>([]);
  const [ isMatched, setIsMatched ] = useState(false);

  useEffect(() => {
    getSkills(skills)
  }, [skills]);

  const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    setMatchedSkills(findSkills(evt))
  }

  return (
    <SkillsInput
      onKeyDown={onKeyDown}
      isMatched={isMatched}
      matchedSkills={matchedSkills}
      skillsArray={skills}
      labelText={labelText}
      placeholderText={placeholderText}
      inputValue={inputValue}
      isValid={isValid}
      isRequired={isRequired}
    />
  )
};

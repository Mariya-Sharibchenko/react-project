import React, { useEffect, useState } from 'react';

import { SkillsInput } from './SkillsInput';
import { IProfileSettingInputProps } from '../interface';
import { findSkills } from '../utils/findSkills';

export interface ISkillsInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getSkills: (arr: string[]) => void,
  skillsArray: string[],
}

export const SkillsInputContainer: React.FC<ISkillsInputContainerProps> = ({
  labelText,
  placeholderText,
  isValid,
  isRequired,
  skillsArray,
  getSkills,
}) => {
  const [ value, setValue ] = useState('')
  const [ addedSkills, setAddedSkills] = useState<string[]>([]);
  const [ matchedSkills, setMatchedSkills ] = useState<string[]>([]);

  useEffect(() => {
    setMatchedSkills(findSkills(value, skillsArray, addedSkills))

    getSkills(addedSkills)
  }, [value, addedSkills]);

  const onInputChange =  (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const onAddSkill: React.MouseEventHandler<HTMLLIElement> = (evt ) => {
    const target = evt.target as HTMLLIElement
    const skill = target.textContent as string

    setAddedSkills(prevState => prevState.includes(skill) ? prevState : [...prevState, skill]);
    setValue('');
  }

  const onDeleteSkill = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const target = evt.target as HTMLButtonElement
    const skill = target.textContent as string

    setAddedSkills(prevState => prevState.filter(el => el !== skill))
  }

  return (
    <SkillsInput
      onInputChange={onInputChange}
      onAddSkill={onAddSkill}
      onDeleteSkill={onDeleteSkill}
      matchedSkills={matchedSkills}
      addedSkillsArray={addedSkills}
      labelText={labelText}
      placeholderText={placeholderText}
      inputValue={value}
      isValid={isValid}
      isRequired={isRequired}
    />
  )
};

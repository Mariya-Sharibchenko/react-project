import React, { useCallback, useEffect, useState } from 'react';

import { SkillsInput } from './SkillsInput';
import { IProfileSettingInputProps } from '../interface';
import { findSkills, IFindSkillsProps } from '../utils/findSkills';
import { ProfileDataTypes } from 'context';

export interface ISkillsInputContainerProps extends Omit<IProfileSettingInputProps, 'inputValue'> {
  getSkills: (id: ProfileDataTypes, arr: string[]) => void,
  skillsArray: string[],
}

export const SkillsInputContainer: React.FC<ISkillsInputContainerProps> = ({
  inputId,
  labelText,
  placeholderText,
  isValid,
  isRequired,
  skillsArray,
  getSkills,
}) => {
  const [ value, setValue ] = useState('');
  const [ addedSkills, setAddedSkills] = useState<string[]>([]);
  const [ matchedSkills, setMatchedSkills ] = useState<string[]>([]);

  useEffect(() => {
    const props: IFindSkillsProps = {value, skillsArray, addedSkills};
    setMatchedSkills(findSkills(props));

    getSkills(inputId, addedSkills);
  }, [value, addedSkills]);

  const onInputChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }, []);

  const onAddSkill: React.MouseEventHandler<HTMLLIElement> = useCallback((evt) => {
    const target = evt.target as HTMLLIElement;
    const skill = target.textContent as string;

    setAddedSkills(prevState => prevState.includes(skill) ? prevState : [...prevState, skill]);
    setValue('');
  }, []);

  const onDeleteSkill = useCallback((skill: string) => {
    setAddedSkills(prevState => prevState.filter(el => el !== skill));
  }, []);

  return (
    <SkillsInput
      inputId={inputId}
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
  );
};

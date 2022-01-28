export interface IFindSkillsProps {
  value: string,
  skillsArray: string[],
  addedSkills: string[]
}

export const findSkills = ( props : IFindSkillsProps ) : string[]  => {
  const restSkills = props.skillsArray.filter(el => !props.addedSkills.includes(el));

  return props.value === '' ? [] : restSkills.filter(el => el.toLowerCase().includes(props.value.toLowerCase()));
};

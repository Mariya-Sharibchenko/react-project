export const findSkills = ( value: string, skillsArray: string[], addedSkills: string[] ): string[] => {
  const restSkills = skillsArray.filter(el => !addedSkills.includes(el));

  return value === '' ? [] : restSkills.filter(el => el.toLowerCase().includes(value.toLowerCase()));
};

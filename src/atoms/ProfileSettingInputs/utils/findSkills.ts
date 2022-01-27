export const findSkills = ( value: string, skillsArray: string[] ): string[] =>
  value === '' ? [] : skillsArray.filter(el => el.toLowerCase().includes(value.toLowerCase()));

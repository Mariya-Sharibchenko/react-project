import { FiltersId, IMultiFilterProps, IStudentDetailedDataProps } from 'context';

export interface IFindStudentProps {
  searchInputValue: string,
  filtersData: IMultiFilterProps[] | undefined,
  studentsArray: IStudentDetailedDataProps[]
}

export const findStudent = ( props: IFindStudentProps ): IStudentDetailedDataProps[] => {
  const ageOptionsLength = props.filtersData?.find(({ id }) => id === FiltersId.age)?.optionsArray.length;
  const filters = props.filtersData?.map(({ id, optionsArray }) => {
    return {
      id: id,
      options: optionsArray.filter(({ isChecked }) => isChecked).map(el => el.value),
    };
  });

  return props.studentsArray.filter(student => {
    const matchedFilters = filters?.filter(({ id, options }) => {
      switch (id) {
        case FiltersId.course:
          return options.map(el => el.toLowerCase()).includes(student[id].toLowerCase());

        case FiltersId.english:
          return options.map(el => el.toLowerCase()).includes(student.education[id].toLowerCase());

        case FiltersId.score:
          return options.find(option => {
            const bottomBorder = option.substring(0, option.indexOf('-'));
            const topBorder = option.substring(option.indexOf('-') + 1);

            return Number(bottomBorder) <= student[id] && student[id] <= Number(topBorder);
          });

        case FiltersId.age:
          return student[id]
                 ? options.find(option => {
                   const optionString = option.toLowerCase().replace(/[а-я ]*/, '');

                   if (option.includes('больше')) {
                     return student[id]! >= Number(optionString);
                   }

                   const bottomBorder = optionString.substring(0, option.indexOf('-'));
                   const topBorder = optionString.substring(option.indexOf('-') + 1);

                   return Number(bottomBorder) <= student[id]! && student[id]! <= Number(topBorder);
                 })
                 : options.length === ageOptionsLength;

        default:
          return;
      }
    });

    return matchedFilters?.length === 4;
  });
};

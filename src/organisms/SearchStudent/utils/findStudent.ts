import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';

export interface IFindStudentProps {
  searchInputValue: string,
  filtersData: IMultiFilterProps[] | undefined,
  studentList: IStudentDetailedDataProps[]
}

export const findStudent = ( props: IFindStudentProps ): IStudentDetailedDataProps[] => {
  props.filtersData?.forEach(({ id, optionsArray }) => {
    const chosenOptions = optionsArray.filter(({ isChecked }) => isChecked);
    console.log(chosenOptions);
    // props.studentList.filter((student) => chosenOptions.includes(student[id]))
  });

  return props.studentList;
};

import { IMultiFilterProps, IStudentDetailedDataProps } from 'context';

export interface IFindStudentProps {
  searchInputValue: string,
  filtersData: IMultiFilterProps[] | undefined,
  studentList: IStudentDetailedDataProps[]
}

export const findStudent = ( props: IFindStudentProps ): IStudentDetailedDataProps[] => {
  console.log(props.searchInputValue, props.filtersData)

  return props.studentList
};

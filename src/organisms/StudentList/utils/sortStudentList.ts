import { IStudentDetailedDataProps } from 'context';

enum FilterOptions {
  high_to_low = 'УБЫВАНИЮ',
  low_to_high = 'ВОЗРАСТАНИЮ'
}

export const sortStudentList = (filterOption: string, studentList: IStudentDetailedDataProps[]): IStudentDetailedDataProps[] => {
  switch (filterOption) {
    case FilterOptions.high_to_low:
      return [...studentList].sort((firstStudent, secondStudent) =>
        secondStudent.score - firstStudent.score
      );
    case FilterOptions.low_to_high:
      return [...studentList].sort((firstStudent, secondStudent) =>
      firstStudent.score - secondStudent.score
    );
    default: return studentList;
  }
};

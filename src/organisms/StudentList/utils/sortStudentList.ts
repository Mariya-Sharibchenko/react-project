import { IStudentDetailedDataProps } from 'context';

export const sortStudentList = (filterOption: string, studentList: IStudentDetailedDataProps[]): IStudentDetailedDataProps[] => {
  switch (filterOption) {
    case 'УБЫВАНИЮ':
      return studentList.sort((firstStudent, secondStudent) =>
        secondStudent.score - firstStudent.score
      );
    case 'ВОЗРАСТАНИЮ':
      return studentList.sort((firstStudent, secondStudent) =>
      firstStudent.score - secondStudent.score
    );
    default: return studentList
  }
};

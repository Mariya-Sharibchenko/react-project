import { IStudentDetailedDataProps } from 'context';

const findValue = (inputValue:string, student: IStudentDetailedDataProps): boolean => {
  const lowCaseInput = inputValue.toLowerCase();

  return Boolean(Object.entries(student).find(([fieldName, fieldValue]) => {
    switch (true) {
      case (typeof fieldValue === 'string'):
        return fieldValue.toLowerCase().includes(lowCaseInput);
      case (fieldName === 'contacts'):
        return fieldValue.city.toLowerCase().includes(lowCaseInput);
      case (fieldName === 'skills'):
        return fieldValue.map((skill: string) => skill.toLowerCase()).includes(lowCaseInput);
      default:
        return false;
    }
  }));
};

export const searchStudent = (inputValue: string, studentList: IStudentDetailedDataProps[]): IStudentDetailedDataProps[] => {
  const matchedStudents = studentList.filter(student => findValue(inputValue, student));

  return matchedStudents.length !== 0 ? matchedStudents : studentList;
};

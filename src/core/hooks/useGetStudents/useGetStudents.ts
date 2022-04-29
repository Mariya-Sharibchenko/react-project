import { useEffect, useState } from 'react';

import { IStudentDetailedDataProps } from 'context';

export const useGetStudents = (): IStudentDetailedDataProps[] => {
  const [ students, setStudents ] = useState<IStudentDetailedDataProps[]>([]);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:3002/students');
    const studentsArray = await response.json();

    setStudents(Object.values(studentsArray));
  };

  useEffect(() => {
    fetchStudents().catch(console.error);
  }, []);

  return students;
};

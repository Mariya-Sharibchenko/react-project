import { useEffect, useState } from 'react';

import { IStudentDetailedDataProps } from 'context';
import { useGetAllStudentsQuery } from 'core/graphql';

export const useStudents = ():IStudentDetailedDataProps[] => {
  const [ students, setStudents ] = useState<IStudentDetailedDataProps[]>([]);

  const { data, loading, error } = useGetAllStudentsQuery();

  useEffect(() => {
    if (!loading) {

      //todo: change IStudentDetailedDataProps[] -> Student[] all over the project
      // and make it:  !error && data && setStudents(data.allStudents)

      !error && data && setStudents(data!.allStudents.map(student => {
        const { __typename, ...myObj} = student;
        return myObj;
      }));
    }
  }, [loading, data]);

  return students;
};

import { useEffect, useState } from 'react';

import { IStudentDetailedDataProps } from 'context';
import { useGetAllStudentsQuery } from 'core/graphql';

export const useStudents = ():IStudentDetailedDataProps[] => {
  const [ students, setStudents ] = useState<IStudentDetailedDataProps[]>([]);

  const { data, loading, error } = useGetAllStudentsQuery();

  useEffect(() => {
    if (!loading) {
      !error && data && setStudents(data.allStudents);
    }
  }, [loading, data]);

  return students;
};

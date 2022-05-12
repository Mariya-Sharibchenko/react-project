import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { allStudentsQuery } from 'core/operations';
import { IStudentDetailedDataProps } from 'context';

export const useStudents = ():IStudentDetailedDataProps[] => {
  const [ students, setStudents ] = useState<IStudentDetailedDataProps[]>([]);

  const { data, loading, error } = useQuery(allStudentsQuery);

  useEffect(() => {
    if (!loading) {
      !error && setStudents(data.allStudents);
    }
  }, [loading, data]);

  return students;
};

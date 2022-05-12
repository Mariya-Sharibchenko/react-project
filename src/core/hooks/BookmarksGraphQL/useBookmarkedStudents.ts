import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { bookmarkedStudents } from 'core/operations';

export const useBookmarkedStudents = (companyId: string): string[] => {
  const [ students, setStudents ] = useState<string[]>([]);

  const { data, loading, error } = useQuery(bookmarkedStudents, {
    variables: {
      companyID: companyId
    },
  });

  useEffect(() => {
    if (!loading) {
      !error && setStudents(data.Company.bookmarkedStudents);
    }
  }, [loading, data]);

  return students;
};

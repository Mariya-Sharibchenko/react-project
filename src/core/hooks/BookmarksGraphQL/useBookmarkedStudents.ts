import { useEffect, useState } from 'react';

import { useGetBookmarkedStudentsQuery } from 'core/graphql';

export const useBookmarkedStudents = (companyId: string): string[] => {
  const [ students, setStudents ] = useState<string[]>([]);

  const { data, loading, error } = useGetBookmarkedStudentsQuery({
    variables: {
      companyID: companyId
    },
  });

  useEffect(() => {
    if (!loading) {
      !error && data && setStudents(data.Company.bookmarkedStudents);
    }
  }, [loading, data]);

  return students;
};

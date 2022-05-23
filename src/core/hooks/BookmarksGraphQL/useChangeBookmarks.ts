import { useCallback, useEffect, useState } from 'react';

import { userStateVar } from 'core/state';
import { bookmarkedStudents } from 'core/operations';
import { useBookmarkedStudents } from './useBookmarkedStudents';
import { useUpdateBookmarkedStudentsMutation } from 'core/graphql';

export const useChangeBookmarks = (studentId: string): [() => void, boolean] => {
  const { company } = userStateVar();
  const studentsInBookmarks = useBookmarkedStudents(company!.id);
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(false);

  useEffect(() => {
    setIsInBookmarks(studentsInBookmarks.includes(studentId));
  }, [studentId]);

  const [ updateBookmarks ] = useUpdateBookmarkedStudentsMutation({
    variables: {
      companyId: company!.id,
      input: studentsInBookmarks.includes(studentId)
             ? studentsInBookmarks.filter(id => id !== studentId)
             : [...studentsInBookmarks, studentId]
    },
    refetchQueries: [{
      query: bookmarkedStudents
    }]
  });

  const onAddToBookmarks = useCallback(async () => {
    const response = await updateBookmarks();

    response.data && setIsInBookmarks(response.data.updateCompany.bookmarkedStudents.includes(studentId));
  }, [ studentId, studentsInBookmarks ]);

  return [
    onAddToBookmarks,
    isInBookmarks
  ];
};

import { useCallback, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

import { userStateVar } from 'core/state';
import { bookmarkedStudents, updateBookmarkedStudentsMutation } from 'core/operations';
import { useBookmarkedStudents } from './useBookmarkedStudents';

export const useChangeBookmarks = (studentId: string): [() => void, boolean] => {
  const company = userStateVar();
  const studentsInBookmarks = useBookmarkedStudents(company.user!.id);
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(false);

  useEffect(() => {
    setIsInBookmarks(studentsInBookmarks.includes(studentId));
  }, [studentId]);

  const [ updateBookmarks ] = useMutation(updateBookmarkedStudentsMutation, {
    variables: {
      companyId: company.user?.id,
      input: studentsInBookmarks.includes(studentId)
             ? studentsInBookmarks.filter(id => id !== studentId)
             : [...studentsInBookmarks, studentId]
    },
    refetchQueries: [bookmarkedStudents]
  });

  const onAddToBookmarks = useCallback(async () => {
    const response = await updateBookmarks();

    setIsInBookmarks(response.data.updateCompany.bookmarkedStudents.includes(studentId));
  }, [ studentId, studentsInBookmarks ]);

  return [
    onAddToBookmarks,
    isInBookmarks
  ];
};

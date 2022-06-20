import { useCallback, useEffect, useState } from 'react';

import { userStateVar } from 'core/state';
import { bookmarkedStudents } from 'core/operations';
import { useBookmarkedStudents } from './useBookmarkedStudents';
import { useUpdateBookmarkedStudentsMutation } from 'core/graphql';

type UpdateBookmarks = [
  () => void,
  boolean
];

export const useChangeBookmarks = (studentId: string): UpdateBookmarks => {
  const { company } = userStateVar();
  const studentsInBookmarks = useBookmarkedStudents(company!.id);
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(false);

  useEffect(() => {
    setIsInBookmarks(studentsInBookmarks.includes(studentId));
  }, [ studentsInBookmarks, studentId ]);

  const [ updateBookmarks, { data, loading } ] = useUpdateBookmarkedStudentsMutation({
    refetchQueries: [{
      query: bookmarkedStudents,
      variables: {
        companyID: company!.id
      }
    }]
  });

  const onAddToBookmarks = useCallback(() => {
    updateBookmarks({
      variables: {
        companyId: company!.id,
        input: studentsInBookmarks.includes(studentId)
               ? studentsInBookmarks.filter(id => id !== studentId)
               : [...studentsInBookmarks, studentId]
      }
    });

    if (!loading) {
      data && setIsInBookmarks(data.updateCompany.bookmarkedStudents.includes(studentId));
    }
  }, [ studentsInBookmarks, studentId ]);

  return [
    onAddToBookmarks,
    isInBookmarks
  ];
};

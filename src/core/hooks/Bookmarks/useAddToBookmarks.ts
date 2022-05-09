import { useCallback, useEffect, useState } from 'react';

import { useUpdateStudentData } from 'core/hooks';

export const useAddToBookmarks = (isMarked: boolean, studentId: number): [() => void, boolean] => {
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(false);

  const [ updateStudent ] = useUpdateStudentData(studentId, {
    aboutStudent: 'some student info'
  });

  useEffect(() => {
    setIsInBookmarks(isMarked);
  }, [isMarked]);

  const onAddToBookmarks = useCallback(async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentId: studentId, action: isInBookmarks ? 'delete' : 'add'})
    };

    const response = await fetch(
      'http://localhost:3002/bookmarked-students',
      requestOptions
    );

    response.status === 200 && setIsInBookmarks(!isInBookmarks);

    await updateStudent();
  }, [isInBookmarks, studentId]);

  return [
    onAddToBookmarks,
    isInBookmarks
  ];
};

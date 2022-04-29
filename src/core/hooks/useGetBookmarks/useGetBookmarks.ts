import { useEffect, useState } from 'react';

export const useGetBookmarks = (userId: number): number[] => {
  const [ studentsInBookmarks, setStudentsInBookmarks ] = useState<number[]>([]);

  const fetchStudentsInBookmarks = async () => {
    const response = await fetch(`http://localhost:3002/bookmarked-students?userId=${userId}`);
    const studentsIdArray = await response.json();

    setStudentsInBookmarks(studentsIdArray.studentsInBookmarks);
  };

  useEffect(() => {
    fetchStudentsInBookmarks().catch(console.error);
  }, [userId]);

  return studentsInBookmarks;
};

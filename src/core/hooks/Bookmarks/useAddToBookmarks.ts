export const useAddToBookmarks = async (isInBookmarks: boolean, studentId: number): Promise<boolean> => {
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

  return response.status === 200 ? !isInBookmarks : isInBookmarks;
};

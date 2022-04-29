export const useSendInvitation = async (studentId: number): Promise<boolean> => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({studentId: studentId})
  };

  const response = await fetch(
    'http://localhost:3002/send-invitation',
    requestOptions
  );

  return response.status === 200;
};

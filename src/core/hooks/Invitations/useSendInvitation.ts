import { useCallback, useState } from 'react';

export const useSendInvitation = (studentId: number): [() => void, boolean] => {
  const [ isInvitationSent, setIsInvitationSent ] = useState<boolean>(false);

  const onSendInvitation = useCallback(async () => {
    if (!isInvitationSent) {
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

      response.status === 200 && setIsInvitationSent(true);
    }
  }, [studentId]);

  return [
    onSendInvitation,
    isInvitationSent
  ];
};

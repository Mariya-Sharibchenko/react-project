import { useMutation } from '@apollo/client';
import { useEffect } from 'react';

import { updateUserMutation } from 'core/operations';

export type UpdateUserInputType = {
  name: string,
  username: string,
  email: string,
};

export const useUpdateUserData = (usedId: number, inputData: UpdateUserInputType) => {
  const [ updateUser, { data, loading, error }] = useMutation(updateUserMutation, {
    variables: {
      id: usedId,
      input: {
        name: inputData.name,
        username: inputData.username,
        email: inputData.email,
      }
    }
  });

  useEffect(() => {
    if (!loading) {
      !error && console.log(data);
    }
  }, [loading, data]);

  return [
    updateUser
  ];
};

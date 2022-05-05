import { useQuery } from '@apollo/client';

import { userQuery } from 'core/operations';

export const useUsers = (userId: number) => {
  const { data, loading, error } = useQuery(userQuery, {
    variables: {
      userId: userId
    }
  });

  return {
    data,
    loading,
    error
  };
};

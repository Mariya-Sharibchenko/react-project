import { useEffect, useState } from 'react';

import { IResponseDataProps } from 'context';
import { IUserState } from 'core/state/userState';
import { useGetResponsesQuery } from 'core/graphql';

export const useResponses = (user: IUserState): IResponseDataProps[] => {
  const [ responses, setResponses ] = useState<IResponseDataProps[]>([]);

  const { data, loading, error } = useGetResponsesQuery({
    variables: {
      companyID: user.user!.id
    },
  });

  useEffect(() => {
    if (!loading) {
      !error && data && setResponses(data.Company.responses);
    }
  }, [loading, data]);

  return responses;
};

import { useEffect, useState } from 'react';

import { IResponseDataProps } from 'context';
import { IUserState } from 'core/state/userState';
import { useGetAllInvitationsQuery } from 'core/graphql';

export const useResponses = (user: IUserState): IResponseDataProps[] => {
  const [ responses, setResponses ] = useState<IResponseDataProps[]>([]);

  const { data, loading, error } = useGetAllInvitationsQuery();

  useEffect(() => {
    if (!loading) {
      if (!error && data) {
        const array = [...data.allInvitations];
        const responseData = array.filter(({company, status, student, invitationDate}) => {
          return company.id === user.user!.id && {student, status, invitationDate};
        });
        setResponses(responseData);
      }
    }
  }, [loading, data]);

  return responses;
};

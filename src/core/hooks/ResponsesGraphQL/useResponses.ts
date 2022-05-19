import { useEffect, useState } from 'react';

import { ICompanyDataProps, IResponseDataProps } from 'context';
import { useGetAllInvitationsQuery } from 'core/graphql';

export const useResponses = (user: ICompanyDataProps): IResponseDataProps[] => {
  const [ responses, setResponses ] = useState<IResponseDataProps[]>([]);

  const { data, loading, error } = useGetAllInvitationsQuery();

  useEffect(() => {
    if (!loading) {
      if (!error && data) {
        const array = [...data.allInvitations];
        const responseData = array.filter(({id, company, status, student, invitationDate}) => {
          return company.id === user!.id && {id, student, status, invitationDate};
        });
        setResponses(responseData);
      }
    }
  }, [loading, data]);

  return responses;
};

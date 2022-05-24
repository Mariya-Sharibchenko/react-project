import { useEffect, useState } from 'react';

import { IInvitationDataProps, IStudentDetailedDataProps } from 'context';
import { useGetAllInvitationsLazyQuery } from 'core/graphql';

export const useInvitations = (user: IStudentDetailedDataProps): [() => void, IInvitationDataProps[]] => {
  const [ invitations, setInvitations ] = useState<IInvitationDataProps[]>([]);

  const [ getInvitationsQuery, { data, loading, error }] = useGetAllInvitationsLazyQuery();

  useEffect(() => {
    if (!loading) {
      if (!error && data) {
        const array = [...data.allInvitations];
        const responseData = array.filter(({id, company, status, student, invitationDate}) => {
          return student.id === user!.id && {id, company, status, invitationDate};
        });
        setInvitations(responseData);
      }
    }
  }, [loading, data]);

  return [
    getInvitationsQuery,
    invitations
  ];
};

import { useEffect, useState } from 'react';

import { IInvitationDataProps, IStudentDetailedDataProps } from 'context';
import { useGetAllInvitationsQuery } from 'core/graphql';

export const useInvitations = (user: IStudentDetailedDataProps): IInvitationDataProps[] => {
  const [ invitations, setInvitations ] = useState<IInvitationDataProps[]>([]);

  const { data, loading, error } = useGetAllInvitationsQuery();

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

  return invitations;
};

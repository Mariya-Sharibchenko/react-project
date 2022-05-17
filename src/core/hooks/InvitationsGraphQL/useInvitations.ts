import { useEffect, useState } from 'react';

import { IInvitationDataProps } from 'context';
import { IUserState } from 'core/state/userState';
import { useGetAllInvitationsQuery } from 'core/graphql';

export const useInvitations = (user: IUserState): IInvitationDataProps[] => {
  const [ invitations, setInvitations ] = useState<IInvitationDataProps[]>([]);

  const { data, loading, error } = useGetAllInvitationsQuery();

  useEffect(() => {
    if (!loading) {
      if (!error && data) {
        const array = [...data.allInvitations];
        const responseData = array.filter(({company, status, student, invitationDate}) => {
          return student.id === user.user!.id && {company, status, invitationDate};
        });
        setInvitations(responseData);
      }
    }
  }, [loading, data]);

  return invitations;
};

import { useEffect, useState } from 'react';

import { IInvitationDataProps } from 'context';
import { IUserState } from 'core/state/userState';
import { useGetInvitationsQuery } from 'core/graphql';

export const useInvitations = (user: IUserState): IInvitationDataProps[] => {
  const [ invitations, setInvitations ] = useState<IInvitationDataProps[]>([]);

  const { data, loading, error } = useGetInvitationsQuery({
    variables: {
      studentID: user.user!.id
    },
  });

  useEffect(() => {
    if (!loading) {
      !error && data && setInvitations(data.Student.invitations);
    }
  }, [loading, data]);

  return invitations;
};

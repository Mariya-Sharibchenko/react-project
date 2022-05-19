import { useCallback } from 'react';

import { userStateVar } from 'core/state';
import { ResponseStatus } from 'context';
import { allInvitationsQuery } from 'core/operations';
import { useInvitations } from 'core';
import { useUpdateInvitationMutation } from 'core/graphql';

export const useUpdateInvitation = (companyId: string, status: ResponseStatus): [() => void] => {
  const { student } = userStateVar();
  const findInvitation = useInvitations(student!).find(({company}) => company.id === companyId);

  const [ updateInvitation ] = useUpdateInvitationMutation({
    variables: {
      id: findInvitation!.id,
      input: {
        status,
      }
    },
    refetchQueries: [allInvitationsQuery]
  });

  const onChangeStatusClick = useCallback(async () => await updateInvitation(), [ companyId ]);

  return [
    onChangeStatusClick
  ];
};

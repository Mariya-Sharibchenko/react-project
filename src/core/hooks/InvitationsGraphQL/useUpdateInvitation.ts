import { useCallback } from 'react';

import { IInvitationDataProps, ResponseStatus } from 'context';
import { allInvitationsQuery } from 'core/operations';
import { useUpdateInvitationMutation } from 'core/graphql';

export const useUpdateInvitation = (): [(invitations: IInvitationDataProps[], companyId: string, status: ResponseStatus) => void] => {
  const [ updateInvitation ] = useUpdateInvitationMutation({
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onChangeInvitationStatusClick = useCallback(async (
    invitationsList: IInvitationDataProps[], companyId: string, status: ResponseStatus
  ) => {
    const findInvitation = await invitationsList.find(({company}) => company.id === companyId);

    await updateInvitation({
      variables: {
        id: findInvitation!.id,
        status
      }
    });
  }, [ updateInvitation ]);

  return [
    onChangeInvitationStatusClick
  ];
};

import { useCallback } from 'react';

import { IInvitationDataProps, ResponseStatus } from 'context';
import { allInvitationsQuery } from 'core/operations';
import { useUpdateInvitationMutation } from 'core/graphql';

export const useUpdateInvitation = (
  invitationsList: IInvitationDataProps[]
): [(companyId: string, status: ResponseStatus) => void] => {

  const [ updateInvitation ] = useUpdateInvitationMutation({
    refetchQueries: [allInvitationsQuery]
  });

  const onChangeInvitationStatusClick = useCallback(async (companyId: string, status: ResponseStatus) => {
    const findInvitation = invitationsList.find(({company}) => company.id === companyId);

    await updateInvitation({
      variables: {
        id: findInvitation!.id,
        status
      }
    });
  }, [ invitationsList ]);

  return [
    onChangeInvitationStatusClick
  ];
};

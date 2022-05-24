import { useCallback } from 'react';

import { IInvitationDataProps, ResponseStatus } from 'context';
import { allInvitationsQuery } from 'core/operations';
import { useUpdateInvitationMutation } from 'core/graphql';

export interface IUpdateInvitation {
  invitations: IInvitationDataProps[],
  companyId: string,
  status: ResponseStatus
}

export const useUpdateInvitation = (): [(props: IUpdateInvitation) => void] => {
  const [ updateInvitation ] = useUpdateInvitationMutation({
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onChangeInvitationStatusClick = useCallback(async (props: IUpdateInvitation) => {
    const { invitations, companyId, status } = props;

    const findInvitation = await invitations.find(({company}) => company.id === companyId);

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

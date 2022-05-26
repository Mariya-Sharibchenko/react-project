import { useCallback } from 'react';

import { IInvitationDataProps } from 'context';
import { useRemoveInvitationMutation } from 'core/graphql';
import { allInvitationsQuery } from 'core/operations';

export interface IRemoveInvitation {
  invitations: IInvitationDataProps[],
  companyId: string
}

export type RemoveInvitationHookType = [
  (props: IRemoveInvitation) => void,
  (invitations: IInvitationDataProps[]) => void
];

export const useRemoveInvitation = (): RemoveInvitationHookType => {
  const [ removeInvitation ] = useRemoveInvitationMutation({
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onDeleteInvitation = useCallback((props: IRemoveInvitation) => {
    const { invitations, companyId } = props;

    const findInvitation = invitations.find(({company}) => company.id === companyId);

    removeInvitation({
      variables: {
        id: findInvitation!.id,
      }
    });
  }, [ removeInvitation ]);

  const onDeleteAllInvitation = useCallback((invitations: IInvitationDataProps[]) => {
    invitations.map(invitation => removeInvitation({
      variables: {
        id: invitation.id
      }
    }));
  }, [ removeInvitation ]);

  return [
    onDeleteInvitation,
    onDeleteAllInvitation
  ];
};

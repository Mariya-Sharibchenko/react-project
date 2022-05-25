import { useCallback } from 'react';

import { IInvitationDataProps } from 'context';
import { useRemoveInvitationMutation } from 'core/graphql';
import { allInvitationsQuery } from 'core/operations';

export interface IRemoveInvitation {
  invitations: IInvitationDataProps[],
  companyId: string
}

export const useRemoveInvitation = (): [(props: IRemoveInvitation) => void] => {
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

  return [
    onDeleteInvitation
  ];
};

export const useRemoveAllInvitations = (): [(invitations: IInvitationDataProps[]) => void ] => {
  const [ removeInvitation ] = useRemoveInvitationMutation({
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onRemoveAllInvitations = useCallback( (invitations: IInvitationDataProps[]) => {
    invitations.map(invitation => removeInvitation({
     variables: {
       id: invitation.id
     }
   }));
  }, [ removeInvitation ]);

  return [
    onRemoveAllInvitations
  ];
};

import { useCallback } from 'react';

import { IResponseDataProps } from 'context';
import { useRemoveInvitationMutation } from 'core/graphql';
import { allInvitationsQuery } from 'core/operations';

export interface IRemoveResponse {
  responses: IResponseDataProps[],
  studentId: string
}

export type RemoveResponseType = [
  (props: IRemoveResponse) => void,
  (responses: IResponseDataProps[]) => void
];

export const useRemoveResponse = (): RemoveResponseType => {
  const [ removeResponse ] = useRemoveInvitationMutation({
    refetchQueries: [{
      query: allInvitationsQuery
    }]
  });

  const onDeleteResponse = useCallback((props: IRemoveResponse) => {
    const { responses, studentId } = props;

    const findInvitation = responses.find(({ student }) => student.id === studentId);

    removeResponse({
      variables: {
        id: findInvitation!.id,
      }
    });
  }, [ removeResponse ]);

  const onDeleteAllResponses = useCallback((invitations: IResponseDataProps[]) => {
    invitations.map(invitation => removeResponse({
      variables: {
        id: invitation.id
      }
    }));
  }, [ removeResponse ]);

  return [
    onDeleteResponse,
    onDeleteAllResponses
  ];
};

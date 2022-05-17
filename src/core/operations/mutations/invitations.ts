import { gql } from '@apollo/client';

export const addInvitationMutation = gql`
  mutation addNewInvitation (
    $input: AddInvitationInput!
  ) {
    addInvitation (
      data: $input
    ) {
      id
      company {
        id
      }
      student {
        id
      }
      status
      invitationDate
    }
  }
`;

import { gql } from '@apollo/client';

export const addInvitationMutation = gql`
  mutation addNewInvitation (
    $input: AddInvitationInput!
  ) {
    createInvitation (
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

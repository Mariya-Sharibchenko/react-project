import { gql } from '@apollo/client';

export const addInvitationMutation = gql`
  mutation addNewInvitation (
    $company: CompanyInput!
    $student: StudentInput!
    $status: ResponseStatus!
    $invitationDate: String!
  ) {
    createInvitation (
      company: $company
      student: $student
      status: $status
      invitationDate: $invitationDate
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

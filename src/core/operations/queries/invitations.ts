import { gql } from '@apollo/client';
import { STUDENT_FIELDS } from '../fragments';

export const allInvitationsQuery = gql`
  ${STUDENT_FIELDS}
  query getAllInvitations {
    allInvitations {
      id
      company {
        id
        name
        contacts
        bookmarkedStudents
      }
      student { 
        ...StudentFields
      }
      invitationDate
      status
    } 
  }
`;

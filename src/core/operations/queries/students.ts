import { gql } from '@apollo/client';
import { STUDENT_FIELDS } from '../fragments';

export const allStudentsQuery = gql`
  ${STUDENT_FIELDS}
  query getAllStudents {
    allStudents {
      ...StudentFields
    } 
  }
`;

export const invitationsQuery = gql`
  query getInvitations($studentID: ID!) {
    Student(id: $studentID) {
      invitations {
        company {
          name 
          contacts
        }
        invitationDate
        status
      }
    } 
  }
`;

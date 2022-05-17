import { gql } from '@apollo/client';
import { STUDENT_FIELDS } from '../fragments';

export const bookmarkedStudents = gql`
  query getBookmarkedStudents($companyID: ID!) {
    Company(id: $companyID) {
      bookmarkedStudents 
    } 
  }
`;

export const responsesQuery = gql`
  ${STUDENT_FIELDS}
  query getResponses($companyID: ID!) {
    Company(id: $companyID) {
      responses {
        student {
          ...StudentFields
        }
        invitationDate
        status
      }
    } 
  }
`;

import { gql } from '@apollo/client';

export const bookmarkedStudents = gql`
  query getBookmarkedStudents($companyID: ID!) {
    Company(id: $companyID) {
      bookmarkedStudents 
    } 
  }
`;

export const responsesQuery = gql`
  query getResponses($companyID: ID!) {
    Company(id: $companyID) {
      responses {
        student {
          firstName
          lastName
          img
          position
          course
          bestStudentMark
          contacts {
            tel
          }
        }
        date
        status
      }
    } 
  }
`;

import { gql } from '@apollo/client';

export const bookmarkedStudents = gql`
  query getBookmarkedStudents($companyID: ID!) {
    Company(id: $companyID) {
      bookmarkedStudents 
    } 
  }
`;

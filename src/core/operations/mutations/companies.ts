import { gql } from '@apollo/client';

export const updateBookmarkedStudentsMutation = gql`
  mutation updateBookmarkedStudents (
    $companyId: ID!
    $input: [String!]
  ) {
    updateCompany (
      id: $companyId
      bookmarkedStudents: $input
    ) {
      bookmarkedStudents
    }
  }
`;

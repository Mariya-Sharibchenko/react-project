import { gql } from '@apollo/client';

export const updateStudentMutation = gql`
  mutation updateStudentInfo (
    $id: ID!
    $input: UpdateStudentInfoInput!
  ) {
    updateStudent (
      id: $id
      aboutStudent: $input
    ) {
      id
      firstName
      aboutStudent
    }
  }
`;

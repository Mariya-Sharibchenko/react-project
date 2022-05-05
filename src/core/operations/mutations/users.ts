import { gql } from '@apollo/client';

export const createUserMutation = gql`
  mutation addUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      email
      address {
        street
      }
      phone
      company {
        name
      }
    }
  }
`;

export const updateUserMutation = gql`
  mutation updateUserInfo (
    $id: ID!
    $input: UpdateUserInput!
  ) {
    updateUser (
      id: $id
      input: $input
    ) {
      id
      username
      name
      email
    }
  }
`;


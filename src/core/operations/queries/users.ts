import { gql } from '@apollo/client';

export const allUsersQuery = gql`
  query getAllUsers {
    users {
      data {
        id
        name
        email
        phone
        company {
          name
        }
      }
    }
  }
`;

export const userQuery = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
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
      posts {
        data {
          title
          body
        }
      }
    }
  }
`;


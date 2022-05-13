import { gql } from '@apollo/client';

export const allStudentsQuery = gql`
  query getAllStudents {
    allStudents {
      id
      img
      firstName
      lastName
      position
      course
      skills
      bestStudentMark
      schoolRecommendation
      score
      diplomaLink
      aboutStudent
      education {
        formal {
          level
        }
      }
      contacts {
        city
        tel
        eMail
      }
      showContacts
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
        date
        status
      }
    } 
  }
`;

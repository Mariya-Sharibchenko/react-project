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
      education {
        english
        formal {
          level
        }
      }
      contacts {
        tel
        eMail
        city
      }
      showContacts
    } 
  }
`;

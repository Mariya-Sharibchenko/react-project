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
      education 
      contacts
      showContacts
    } 
  }
`;

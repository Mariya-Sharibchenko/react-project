import { gql } from '@apollo/client';

export const STUDENT_FIELDS = gql`
  fragment StudentFields on Student {
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
      english
      formal {
        level
        detailedInfo
      }
      additional
    }
    contacts {
      city
      tel
      eMail
      socialMedia {
        linkedin
      }
    }
    showContacts
  }
`;

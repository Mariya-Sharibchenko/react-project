import { gql } from '@apollo/client';
import { STUDENT_FIELDS } from '../fragments';

export const allStudentsQuery = gql`
  ${STUDENT_FIELDS}
  query getAllStudents {
    allStudents {
      ...StudentFields
    } 
  }
`;

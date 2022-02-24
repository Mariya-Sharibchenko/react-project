import styled from 'styled-components';

import { Media } from 'context';

export const WrapperFieldForStudentCV = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  ${Media.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StudentCVInfoTitle = styled.p`
  width: 140px;
  margin: 0 0 24px 0;
  font-weight: 600;
  font-size: 16px;

  ${Media.tablet} {
    margin: 0;
  }
`;

export const StudentCVInfoContent = styled.div`
  width: 100%;
  font-size: 14px;
  
  ${Media.tablet} {
    width: 538px;
  }
`;

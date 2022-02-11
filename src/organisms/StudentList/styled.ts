import styled from 'styled-components';

import profileIcon from 'public/profile-icon_grey.svg';
import { Media } from 'context';

export const StudentListWrapper = styled.div`
  margin: 0 auto;
  max-width: 350px;
  ${Media.tablet} {
    max-width: 666px;
  }
  ${Media.laptop} {
    max-width: 1100px;
  }
`;

export const StudentListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  
  ${Media.tablet} {
    margin-bottom: 48px;
  }
`;

export const AmountOfFoundCV = styled.p`
  padding-left: 0;
  margin: 0;
  font-weight: 700;
  position: relative;

  ${Media.tablet} {
    padding-left: 36px;
    line-height: 24px;
    &:before {
      content: url(${profileIcon});
      position: absolute;
      width: 24px;
      height: 24px;
      left: 0;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  ${Media.laptop} {
    min-width: 330px;
  }
`;

export const FilterText = styled.p`
  display: none;
  
  ${Media.tablet} {
    display: unset;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
`;

export const StudentsArrayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StudentCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StudentCVsWrapper = styled.div`
  
`;

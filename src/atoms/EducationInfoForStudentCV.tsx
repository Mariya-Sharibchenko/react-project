import React from 'react';

import styled from 'styled-components';

import { AdditionalEducationTitle, EducationLanguageTitle, IStudentEducationInfoProps } from 'context';

const StyledEducationInfo = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 1.7;
`;

const EducationInfoItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const EducationTitle = styled.p`
  margin: 0;
  font-weight: 600;
`;

const EducationDetailedInfo = styled.p`
  margin: 0;
`;

export const EducationInfoForStudentCV: React.FC<IStudentEducationInfoProps> = ({formal, additional, english}) => {
  const { level, detailedInfo } = formal;

  return (
    <StyledEducationInfo>
      <EducationInfoItem>
        <EducationTitle>{level}</EducationTitle>
        <EducationDetailedInfo>{detailedInfo}</EducationDetailedInfo>
      </EducationInfoItem>

      <EducationInfoItem>
        <EducationTitle>{EducationLanguageTitle}</EducationTitle>
        <EducationDetailedInfo>{english}</EducationDetailedInfo>
      </EducationInfoItem>

      <EducationInfoItem>
        <EducationTitle>{AdditionalEducationTitle}</EducationTitle>
        <EducationDetailedInfo>{additional}</EducationDetailedInfo>
      </EducationInfoItem>
    </StyledEducationInfo>
  )
};

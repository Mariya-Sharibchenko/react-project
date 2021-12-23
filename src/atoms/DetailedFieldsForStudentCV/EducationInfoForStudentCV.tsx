import React from 'react';

import { AdditionalEducationTitle, EducationLanguageTitle, IStudentEducationInfoProps } from 'context';

import { StyledInfoItem, StyledInfoWrapper, StyledTitle, StyledText } from './styled';

export const EducationInfoForStudentCV: React.FC<IStudentEducationInfoProps> = ({formal, additional, english}) => {
  const { level, detailedInfo } = formal;

  return (
    <StyledInfoWrapper>
      <StyledInfoItem>
        <StyledTitle>{level}</StyledTitle>

        <StyledText>{detailedInfo}</StyledText>
      </StyledInfoItem>

      <StyledInfoItem>
        <StyledTitle>{EducationLanguageTitle}</StyledTitle>

        <StyledText>{english}</StyledText>
      </StyledInfoItem>

      <StyledInfoItem>
        <StyledTitle>{AdditionalEducationTitle}</StyledTitle>

        <StyledText>{additional}</StyledText>
      </StyledInfoItem>
    </StyledInfoWrapper>
  )
};

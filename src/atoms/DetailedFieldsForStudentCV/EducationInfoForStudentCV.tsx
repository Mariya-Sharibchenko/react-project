import React from 'react';

import {
  IStudentEducationInfoProps,
  TitlesForStudentCV,
} from 'context';

import { StyledInfoItem, StyledInfoWrapper, StyledTitle, StyledText } from './styled';

interface ITitleTextFieldProps {
  title: string,
  text: string,
}

export const TitleTextField: React.FC<ITitleTextFieldProps> = ({ title, text }) => {
  return (
    <StyledInfoItem>
      <StyledTitle>{title}</StyledTitle>

      <StyledText>{text}</StyledText>
    </StyledInfoItem>
  );
};

export const EducationInfoForStudentCV: React.FC<IStudentEducationInfoProps> = ({
  formal,
  additional,
  english,
}) => {

  const { level, detailedInfo } = formal;

  return (
    <StyledInfoWrapper>
      <TitleTextField title={level}
                      text={detailedInfo}
      />

      <TitleTextField
        title={TitlesForStudentCV.Language}
        text={english}
      />

      {additional && <TitleTextField title={TitlesForStudentCV.AdditionalEducation} text={additional} />}
    </StyledInfoWrapper>
  );
};

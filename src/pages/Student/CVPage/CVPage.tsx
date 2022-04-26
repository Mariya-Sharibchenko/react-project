import React from 'react';

import {
  PageTitles,
  EducationSettings,
  EnglishSettings,
  SkillsArray,
  ProfileDataValidationTypes
} from 'context';
import { Content, PageCover } from 'templates/default';
import {
  CoverWrapper,
  CoverTitle,
  AdvertisingBlock,
  BannerWrapper,
  PartnerLogosWrapper,
  CVPageContentWrapper
} from './styled';
import { ProfileSettingsFormContainer } from 'molecules';
import { IProfileDataProps } from 'molecules/ProfileSettingsForm/Profile/reducer';

interface ICVPageProps {
  submitCVChanges: (data: IProfileDataProps) => void,
  validationCVFieldsFunc: (data: IProfileDataProps) => ProfileDataValidationTypes
}

export const CVPage: React.FC<ICVPageProps> = ({
  submitCVChanges,
  validationCVFieldsFunc
}) => {
  return (
    <>
      <PageCover>
        <CoverWrapper>
          <CoverTitle>{PageTitles.CVPageTitle}</CoverTitle>
        </CoverWrapper>
      </PageCover>

      <Content>
        <CVPageContentWrapper>
          <ProfileSettingsFormContainer
            submitData={submitCVChanges}
            englishLevelsArray={EnglishSettings}
            educationLevelsArray={EducationSettings}
            skillsArray={SkillsArray}
            validationFunction={validationCVFieldsFunc}
          />

          <AdvertisingBlock>
            <BannerWrapper />

            <PartnerLogosWrapper />
          </AdvertisingBlock>
        </CVPageContentWrapper>
      </Content>
    </>
  );
};

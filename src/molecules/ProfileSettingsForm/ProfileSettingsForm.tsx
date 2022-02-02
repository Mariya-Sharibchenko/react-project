import React from 'react';

import { ProfileSettingSubmitButtonText, ProfileSettingSubmitInfoMessage } from 'context';
import {
  ProfileSettingsFormWrapper,
  SubmitButton,
  SubmitButtonWrapper,
  SubmitInfoMessage
} from './styled';
import {
  IExtendedFieldsetProps,
  ContactInfoFieldset,
  EducationInfoFieldset,
  MainInfoFieldset,
  PersonalInfoFieldset,
  SocialMediaFieldset
} from './ProfileFormFieldsets';

export interface IProfileSettingsFormProps extends IExtendedFieldsetProps {
  onSubmitClick: () => void
}

export const ProfileSettingsForm: React.FC<IProfileSettingsFormProps> = ({
  englishLevelsArray,
  educationLevelsArray,
  skillsArray,
  getValue,
  getSkills,
  isValid,
  onSubmitClick
}) => {
  return (
    <ProfileSettingsFormWrapper>
      <MainInfoFieldset getValue={getValue} isValid={isValid} />

      <ContactInfoFieldset getValue={getValue} isValid={isValid} />

      <EducationInfoFieldset
        educationLevelsArray={educationLevelsArray}
        englishLevelsArray={englishLevelsArray}
        skillsArray={skillsArray}
        getSkills={getSkills}
        getValue={getValue}
        isValid={isValid}
      />

      <PersonalInfoFieldset getValue={getValue} isValid={isValid} />

      <SocialMediaFieldset getValue={getValue} isValid={isValid} />

      <SubmitButtonWrapper>
        <SubmitInfoMessage>{ProfileSettingSubmitInfoMessage}</SubmitInfoMessage>

        <SubmitButton onClick={onSubmitClick} text={ProfileSettingSubmitButtonText} />
      </SubmitButtonWrapper>

    </ProfileSettingsFormWrapper>
  )
};

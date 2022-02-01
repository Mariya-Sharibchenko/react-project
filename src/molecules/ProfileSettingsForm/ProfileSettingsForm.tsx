import React from 'react';

import {
  TextInputContainer,
  FormattedInputContainer,
  FilteredInputContainer,
  SkillsInputContainer
} from 'atoms/ProfileSettingInputs';
import { formatDate, formatPhone } from 'atoms/ProfileSettingInputs/utils';

import {
  ProfileSettingInputLabels,
  ProfileSettingInputPlaceholders,
  ProfileSettingsHeaders,
  ProfileSettingSocialMediaLabels,
  ProfileSettingSocialMediaPlaceholder,
  SocialMedia,
  SocialMediaTypes,
  ProfileSettingSubmitButtonText
} from 'context';
import {
  Fieldset,
  ItemWrapper,
  Legend,
  ProfileSettingsFormWrapper,
  SubmitButton,
  SubmitButtonWrapper,
  SubmitText
} from './styled';
import { EducationSettings, SkillsArray } from 'mock';

export interface IProfileSettingsFormProps {
  getValue: (value: string) => void,
  getSkills: (arr: string[]) => void,
  isValid: boolean,
  onSubmitClick: () => void
}

export const ProfileSettingsForm: React.FC<IProfileSettingsFormProps> = ({
  getValue,
  getSkills,
  isValid,
  onSubmitClick
}) => {
  return (
    <ProfileSettingsFormWrapper>
      <Fieldset>
        <Legend>{ProfileSettingsHeaders.mainInfo}</Legend>

        <ItemWrapper>
          <TextInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.name}
            placeholderText={ProfileSettingInputPlaceholders.name}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <FormattedInputContainer
            formatValueFunction={formatDate}
            getValue={getValue}
            labelText={ProfileSettingInputLabels.birthDate}
            placeholderText={ProfileSettingInputPlaceholders.birthDate}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>
      </Fieldset>

      <Fieldset>
        <Legend>{ProfileSettingsHeaders.contactInfo}</Legend>

        <ItemWrapper>
          <TextInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.city}
            placeholderText={ProfileSettingInputPlaceholders.city}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <FormattedInputContainer
            formatValueFunction={formatPhone}
            getValue={getValue}
            labelText={ProfileSettingInputLabels.phone}
            placeholderText={ProfileSettingInputPlaceholders.phone}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <TextInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.email}
            placeholderText={ProfileSettingInputPlaceholders.email}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>
      </Fieldset>

      <Fieldset>
        <Legend>{ProfileSettingsHeaders.educationInfo}</Legend>

        <ItemWrapper>
          <FilteredInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.education}
            placeholderText={ProfileSettingInputPlaceholders.education}
            optionsArray={EducationSettings}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <FilteredInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.english}
            placeholderText={ProfileSettingInputPlaceholders.english}
            optionsArray={EducationSettings}
            isValid={isValid}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <TextInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.additionalEducation}
            placeholderText={ProfileSettingInputPlaceholders.additionalEducation}
            isValid={isValid}
            isRequired={false}
            isTextarea={true}
          />
        </ItemWrapper>

        <SkillsInputContainer
          getSkills={getSkills}
          skillsArray={SkillsArray}
          labelText={ProfileSettingInputLabels.skills}
          placeholderText={ProfileSettingInputPlaceholders.skills}
          isValid={isValid}
          isRequired={true}
        />
      </Fieldset>

      <Fieldset>
        <Legend>{ProfileSettingsHeaders.personalInfo}</Legend>

        <ItemWrapper>
          <TextInputContainer
            getValue={getValue}
            labelText={ProfileSettingInputLabels.about}
            placeholderText={ProfileSettingInputPlaceholders.about}
            isValid={isValid}
            isRequired={true}
            isTextarea={true}
          />
        </ItemWrapper>
      </Fieldset>

      <Fieldset>
        <Legend>{ProfileSettingsHeaders.educationInfo}</Legend>

        {Object.keys(SocialMedia).map(socialMediaItem =>
          <ItemWrapper key={socialMediaItem}>
            <TextInputContainer
              getValue={getValue}
              labelText={ProfileSettingSocialMediaLabels[socialMediaItem as keyof SocialMediaTypes]}
              placeholderText={ProfileSettingSocialMediaPlaceholder}
              isValid={isValid}
              isRequired={true}
            />
          </ItemWrapper>
        )}
      </Fieldset>

      <SubmitButtonWrapper>
        <SubmitText>
          Cum sociis natoque penatibus et magnis dis parturient montes.
        </SubmitText>

        <SubmitButton onClick={onSubmitClick} text={ProfileSettingSubmitButtonText}></SubmitButton>
      </SubmitButtonWrapper>

    </ProfileSettingsFormWrapper>
  )
};

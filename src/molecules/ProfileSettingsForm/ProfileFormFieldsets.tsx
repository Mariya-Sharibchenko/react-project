import React from 'react';

import { Fieldset, ItemWrapper, Legend } from './styled';
import {
  IFilterOptionsProps,
  ProfileSettingInputLabels,
  ProfileSettingInputPlaceholders,
  ProfileSettingsHeaders,
  ProfileSettingSocialMediaLabels,
  ProfileSettingSocialMediaPlaceholder,
  SocialMedia,
  SocialMediaTypes
} from 'context';
import {
  FilteredInputContainer,
  FormattedInputContainer,
  SkillsInputContainer,
  TextInputContainer
} from 'atoms/ProfileSettingInputs';
import { formatDate, formatPhone } from 'atoms/ProfileSettingInputs/utils';

export interface IFieldsetProps {
  getValue: (value: string) => void,
  isValid: boolean,
}

export interface IExtendedFieldsetProps extends IFieldsetProps {
  englishLevelsArray: IFilterOptionsProps[],
  educationLevelsArray: IFilterOptionsProps[],
  skillsArray: string[],
  getSkills: (arr: string[]) => void,
}

export const MainInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
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
  )
};

export const ContactInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
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
  )
};

export const EducationInfoFieldset: React.FC<IExtendedFieldsetProps> = ({
  educationLevelsArray,
  englishLevelsArray,
  skillsArray,
  getValue,
  isValid,
  getSkills
}) => {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.educationInfo}</Legend>

      <ItemWrapper>
        <FilteredInputContainer
          getValue={getValue}
          labelText={ProfileSettingInputLabels.education}
          placeholderText={ProfileSettingInputPlaceholders.education}
          optionsArray={educationLevelsArray}
          isValid={isValid}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <FilteredInputContainer
          getValue={getValue}
          labelText={ProfileSettingInputLabels.english}
          placeholderText={ProfileSettingInputPlaceholders.english}
          optionsArray={englishLevelsArray}
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

      <ItemWrapper>
        <SkillsInputContainer
          getSkills={getSkills}
          skillsArray={skillsArray}
          labelText={ProfileSettingInputLabels.skills}
          placeholderText={ProfileSettingInputPlaceholders.skills}
          isValid={isValid}
          isRequired={true}
        />
      </ItemWrapper>
    </Fieldset>
  )
};

export const PersonalInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
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
  )
};

export const SocialMediaFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) =>  {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.socialMedia}</Legend>

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
  )
};

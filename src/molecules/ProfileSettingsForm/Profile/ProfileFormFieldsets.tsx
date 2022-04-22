import React from 'react';

import { Fieldset, ItemWrapper, Legend } from '../styled';
import {
  IFilterOptionsProps,
  ProfileDataTypes,
  ProfileDataValidationTypes,
  ProfileSettingInputLabels,
  ProfileSettingInputPlaceholders,
  ProfileSettingInputs,
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
} from 'atoms';
import { formatDate, formatPhone } from 'atoms/ProfileSettingInputs/utils';

export interface IFieldsetProps {
  getValue: (id: ProfileDataTypes, value: string) => void,
  isValid: ProfileDataValidationTypes,
}

export interface IExtendedFieldsetProps extends IFieldsetProps {
  englishLevelsArray: IFilterOptionsProps[],
  educationLevelsArray: IFilterOptionsProps[],
  skillsArray: string[],
  getSkills: (id: ProfileDataTypes, arr: string[]) => void,
}

export const MainInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.mainInfo}</Legend>

      <ItemWrapper>
        <TextInputContainer
          inputId={ProfileSettingInputs.name}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.name}
          placeholderText={ProfileSettingInputPlaceholders.name}
          isValid={isValid.name}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <FormattedInputContainer
          inputId={ProfileSettingInputs.birthDate}
          formatValueFunction={formatDate}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.birthDate}
          placeholderText={ProfileSettingInputPlaceholders.birthDate}
          isValid={isValid.birthDate}
          isRequired={true}
        />
      </ItemWrapper>
    </Fieldset>
  );
};

export const ContactInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.contactInfo}</Legend>

      <ItemWrapper>
        <TextInputContainer
          inputId={ProfileSettingInputs.city}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.city}
          placeholderText={ProfileSettingInputPlaceholders.city}
          isValid={isValid.city}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <FormattedInputContainer
          inputId={ProfileSettingInputs.phone}
          formatValueFunction={formatPhone}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.phone}
          placeholderText={ProfileSettingInputPlaceholders.phone}
          isValid={isValid.phone}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <TextInputContainer
          inputId={ProfileSettingInputs.email}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.email}
          placeholderText={ProfileSettingInputPlaceholders.email}
          isValid={isValid.email}
          isRequired={true}
        />
      </ItemWrapper>
    </Fieldset>
  );
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
          inputId={ProfileSettingInputs.education}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.education}
          placeholderText={ProfileSettingInputPlaceholders.education}
          optionsArray={educationLevelsArray}
          isValid={isValid.education}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <FilteredInputContainer
          inputId={ProfileSettingInputs.english}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.english}
          placeholderText={ProfileSettingInputPlaceholders.english}
          optionsArray={englishLevelsArray}
          isValid={isValid.english}
          isRequired={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <TextInputContainer
          inputId={ProfileSettingInputs.additionalEducation}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.additionalEducation}
          placeholderText={ProfileSettingInputPlaceholders.additionalEducation}
          isValid={isValid.additionalEducation}
          isRequired={false}
          isTextarea={true}
        />
      </ItemWrapper>

      <ItemWrapper>
        <SkillsInputContainer
          inputId={ProfileSettingInputs.skills}
          getSkills={getSkills}
          skillsArray={skillsArray}
          labelText={ProfileSettingInputLabels.skills}
          placeholderText={ProfileSettingInputPlaceholders.skills}
          isValid={isValid.skills}
          isRequired={true}
        />
      </ItemWrapper>
    </Fieldset>
  );
};

export const PersonalInfoFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) => {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.personalInfo}</Legend>

      <ItemWrapper>
        <TextInputContainer
          inputId={ProfileSettingInputs.about}
          getValue={getValue}
          labelText={ProfileSettingInputLabels.about}
          placeholderText={ProfileSettingInputPlaceholders.about}
          isValid={isValid.about}
          isRequired={true}
          isTextarea={true}
        />
      </ItemWrapper>
    </Fieldset>
  );
};

export const SocialMediaFieldset: React.FC<IFieldsetProps> = ({getValue, isValid}) =>  {
  return (
    <Fieldset>
      <Legend>{ProfileSettingsHeaders.socialMedia}</Legend>

      {Object.keys(SocialMedia).map(socialMediaItem =>
        <ItemWrapper key={socialMediaItem}>
          <TextInputContainer
            inputId={SocialMedia[socialMediaItem as keyof SocialMediaTypes]}
            getValue={getValue}
            labelText={ProfileSettingSocialMediaLabels[socialMediaItem as keyof SocialMediaTypes]}
            placeholderText={ProfileSettingSocialMediaPlaceholder}
            isValid={isValid[socialMediaItem as keyof SocialMediaTypes]}
            isRequired={true}
          />
        </ItemWrapper>
      )}
    </Fieldset>
  );
};

import React from 'react';

import { TextInputContainer } from 'atoms/ProfileSettingInputs/TextInput';
import { FormattedInputContainer } from 'atoms/ProfileSettingInputs/FormattedInput';
import { FilteredInputContainer } from 'atoms/ProfileSettingInputs/FilteredInput';
import { SkillsInputContainer } from 'atoms/ProfileSettingInputs/SkillsInput';
import { formatDate } from 'atoms/ProfileSettingInputs/utils/formatDate';

import { ProfileSettingInputLabels, ProfileSettingInputPlaceholders, ProfileSettingsHeaders } from 'context';
import { Fieldset, ItemWrapper, Legend, ProfileSettingsFormWrapper } from './styled';
import { EducationSettings } from 'mock/profileSettingData';
import { SkillsArray } from 'mock/skillsData';

export interface IProfileSettingsFormProps {
  getValue: (value: string) => void,
  getSkills: (arr: string[]) => void,
  isValid: boolean,
}

export const ProfileSettingsForm: React.FC<IProfileSettingsFormProps> = ({
  getValue,
  getSkills,
  isValid = true,
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
            formatValueFunction={formatDate}
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
            isInputSizeBig={true}
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

    </ProfileSettingsFormWrapper>
  )
};

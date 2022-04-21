import React from 'react';

import {
  Fieldset,
  ItemWrapper,
  Legend,
  ProfileSettingsFormWrapper,
  SubmitButton,
  SubmitButtonWrapper,
  SubmitInfoMessage
} from '../styled';
import {
  PasswordDataTypes,
  PasswordDataValidationTypes, ProfileDataTypes,
  ProfileSettingInputLabels,
  ProfileSettingInputPlaceholders,
  ProfileSettingInputs,
  ProfileSettingsHeaders,
  ProfileSettingSubmitButtonText,
  ProfileSettingSubmitInfoMessage
} from 'context';
import { TextInputContainer } from 'atoms';

export interface IChangePasswordFormProps {
  onSubmitClick: () => void,
  getValue: (id: ProfileDataTypes, value: string) => void,
  isValid: PasswordDataValidationTypes,
}

export const ChangePasswordForm: React.FC<IChangePasswordFormProps> = ({
  onSubmitClick,
  getValue,
  isValid
}) => {
  return (
    <ProfileSettingsFormWrapper>
      <Fieldset>
        <Legend>{ProfileSettingsHeaders.security}</Legend>

        <ItemWrapper>
          <TextInputContainer
            inputId={ProfileSettingInputs.currentPassword}
            getValue={getValue}
            labelText={ProfileSettingInputLabels.currentPassword}
            placeholderText={ProfileSettingInputPlaceholders.currentPassword}
            isValid={isValid.currentPassword}
            isRequired={true}
          />
        </ItemWrapper>

        <ItemWrapper>
          <TextInputContainer
            inputId={ProfileSettingInputs.newPassword}
            getValue={getValue}
            labelText={ProfileSettingInputLabels.newPassword}
            placeholderText={ProfileSettingInputPlaceholders.newPassword}
            isValid={isValid.newPassword}
            isRequired={true}
          />
        </ItemWrapper>
      </Fieldset>

      <SubmitButtonWrapper>
        <SubmitInfoMessage>{ProfileSettingSubmitInfoMessage}</SubmitInfoMessage>

        <SubmitButton onClick={onSubmitClick} text={ProfileSettingSubmitButtonText} />
      </SubmitButtonWrapper>
    </ProfileSettingsFormWrapper>
  );
};

import React from 'react';

import { PageCover, Content } from 'templates/default';
import { CoverTitle, CoverWrapper, SettingsPageContentWrapper, AdvertisingWrapper } from './styled';
import { PageTitles, PasswordDataValidationTypes } from 'context';
import { ChangePasswordFormContainer } from 'molecules/ProfileSettingsForm';
import { IPasswordDataProps } from 'molecules/ProfileSettingsForm/Password/reducer';

export interface ISettingsPageProps {
  submitPasswordChange: (data: IPasswordDataProps) => void,
  validationPassword: (data: IPasswordDataProps) => PasswordDataValidationTypes
}

export const SettingsPage: React.FC<ISettingsPageProps> = ({
  submitPasswordChange,
  validationPassword
}) => {
  return (
    <>
      <PageCover>
        <CoverWrapper>
          <CoverTitle>{PageTitles.CVPageTitle}</CoverTitle>
        </CoverWrapper>
      </PageCover>

      <Content>
        <SettingsPageContentWrapper>
          <ChangePasswordFormContainer
            submitFunction={submitPasswordChange}
            validationFunction={validationPassword}
          />
        </SettingsPageContentWrapper>

        <AdvertisingWrapper />
      </Content>
    </>
  );
};

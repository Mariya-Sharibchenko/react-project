import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  INotificationsDataProps,
  IStudentDataProps, Paths,
  StudentMenuItems,
  UserMenuItems
} from 'context';
import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import { CVPage, InvitationsPage } from 'pages';
import { InvitationsArray, PasswordValidation, ProfileDataValidation } from 'mock';
import { SettingsPage } from '../Common';

interface IStudentTemplateProps {
  user: IStudentDataProps,
  notifications: INotificationsDataProps
}

export const StudentTemplate: React.FC<IStudentTemplateProps> = ({
  user,
  notifications,
}) => {
  return (
    <>
      <Header>
        <NavbarMenu
          menuItems={StudentMenuItems}
          userMenuItems={UserMenuItems}
          notifications={notifications}
          user={user}
        />
      </Header>

      <Routes>
        <Route
          path={Paths.home}
          element={<Navigate to={Paths.invitations} />}
        />
        <Route
          path={Paths.invitations}
          element={<InvitationsPage invitations={InvitationsArray} onInvitationStatusClick={() => true} />}
        />
        <Route
          path={Paths.user}
          element={<CVPage submitCVChanges={() => true} validationCVFieldsFunc={() => ProfileDataValidation} />}
        />
        <Route
          path={Paths.settings}
          element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

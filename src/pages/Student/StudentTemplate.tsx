import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  CompanyMenuItems,
  INotificationsDataProps,
  IStudentDataProps,
  StudentMenuItems,
  UserMenuItems
} from 'context';
import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import { HomePage, ResponsesPage, InvitationsPage } from 'pages';
import { InvitationsArray, ResponsesArray, StudentArray } from 'mock';

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
          path="/"
          element={<Navigate to={StudentMenuItems[0].pathTo} />}
        />
        <Route
          path={StudentMenuItems[0].pathTo}
          element={<InvitationsPage invitations={InvitationsArray} onInvitationStatusClick={() => true} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import {
  INotificationsDataProps,
  CompanyMenuItems,
  UserMenuItems,
  ICompanyDataProps
} from 'context';
import { HomePage, ResponsesPage, InvitationsPage } from 'pages';
import { InvitationsArray, ResponsesArray, StudentArray } from 'mock';

interface ICompanyTemplateProps {
  user: ICompanyDataProps,
  notifications: INotificationsDataProps,
}

export const CompanyTemplate: React.FC<ICompanyTemplateProps> = ({
  user,
  notifications
}) => {
  return (
    <>
      <Header>
        <NavbarMenu
          menuItems={CompanyMenuItems}
          userMenuItems={UserMenuItems}
          notifications={notifications}
          user={user}
        />
      </Header>

      <Routes>
        <Route
          path="/"
          element={<Navigate to={CompanyMenuItems[0].pathTo} />}
        />
        <Route
          path={CompanyMenuItems[0].pathTo}
          element={<HomePage students={StudentArray} studentsInBookmarks={[2,1,5]} />}
        />
        <Route
          path={CompanyMenuItems[1].pathTo}
          element={<ResponsesPage responses={ResponsesArray} onInvitationStatusClick={() => true} />}
        />
        <Route
          path={CompanyMenuItems[2].pathTo}
          element={<InvitationsPage invitations={InvitationsArray} onInvitationStatusClick={() => true} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

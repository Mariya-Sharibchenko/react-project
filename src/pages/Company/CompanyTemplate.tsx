import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import {
  INotificationsDataProps,
  CompanyMenuItems,
  UserMenuItems,
  ICompanyDataProps,
  WindowSize
} from 'context';
import { HomePage, ResponsesPage, InvitationsPage, StudentCVPage } from 'pages';
import { BookmarkedStudents, InvitationsArray, ResponsesArray, StudentArray } from 'mock';
import { useWindowSize } from 'utils/getWindowSize';

interface ICompanyTemplateProps {
  user: ICompanyDataProps,
  notifications: INotificationsDataProps,
}

export const CompanyTemplate: React.FC<ICompanyTemplateProps> = ({
  user,
  notifications
}) => {
  const windowSize = useWindowSize();

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
        { windowSize && windowSize.width > WindowSize.laptop ?
          <Route
            path={`${CompanyMenuItems[0].pathTo}/*`}
            element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
          /> :
          <>
            <Route
              path={CompanyMenuItems[0].pathTo}
              element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
            />
            {StudentArray.map(student =>
              <Route
                path={`${CompanyMenuItems[0].pathTo}/${student.id}`}
                element={
                <StudentCVPage
                  student={student}
                  isMarked={BookmarkedStudents.includes(student.id)}
                  onSendInvitationClick={() => true}
                  onAddToBookmarkClick={() => true}
                />}
                key={student.id}
              />
            )}
          </>
        }
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

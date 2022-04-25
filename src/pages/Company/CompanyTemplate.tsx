import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import {
  INotificationsDataProps,
  CompanyMenuItems,
  UserMenuItems,
  ICompanyDataProps,
  WindowSize,
  Paths
} from 'context';
import { HomePage, ResponsesPage, StudentCVPage } from 'pages';
import { BookmarkedStudents, ResponsesArray, StudentArray, PasswordValidation } from 'mock';
import { useWindowSize } from 'utils/getWindowSize';
import { SettingsPage } from '../Common';
import { BookmarkedCVPage } from './BookmarkedCVPage';

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
          path={Paths.home}
          element={<Navigate to={CompanyMenuItems[0].pathTo} />}
        />
        { windowSize && windowSize.width > WindowSize.laptop ?
          <>
            <Route
              path={`${CompanyMenuItems[0].pathTo}/*`}
              element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
            />
            <Route
              path={`${CompanyMenuItems[2].pathTo}/*`}
              element={<BookmarkedCVPage students={StudentArray} CVInBookmarks={BookmarkedStudents} />}
            />
          </> :
          <>
            <Route
              path={CompanyMenuItems[0].pathTo}
              element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
            />
            <Route
              path={CompanyMenuItems[2].pathTo}
              element={<BookmarkedCVPage students={StudentArray} CVInBookmarks={BookmarkedStudents} />}
            />
            {StudentArray.map(student =>
              <>
                <Route
                  path={`${CompanyMenuItems[0].pathTo}/${student.id}`}
                  element={
                    <StudentCVPage
                      student={student}
                      isMarked={BookmarkedStudents.includes(student.id)}
                      onSendInvitationClick={() => true}
                      onAddToBookmarkClick={() => true}
                    />}
                  key={`${CompanyMenuItems[0].pathTo}/${student.id}`}
                />
                <Route
                  path={`${CompanyMenuItems[2].pathTo}/${student.id}`}
                  element={
                    <StudentCVPage
                      student={student}
                      isMarked={BookmarkedStudents.includes(student.id)}
                      onSendInvitationClick={() => true}
                      onAddToBookmarkClick={() => true}
                    />}
                  key={`${CompanyMenuItems[2].pathTo}/${student.id}`}
                />
              </>
            )}
          </>
        }
        <Route
          path={CompanyMenuItems[1].pathTo}
          element={<ResponsesPage responses={ResponsesArray} onInvitationStatusClick={() => true} />}
        />
        <Route
          path={UserMenuItems[1].pathTo}
          element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

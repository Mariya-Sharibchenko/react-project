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
import { HomePage, ResponsesPage, StudentCVPage, BookmarkedCVPage, SettingsPage } from 'pages';
import { BookmarkedStudents, ResponsesArray, StudentArray, PasswordValidation } from 'mock';
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
          path={Paths.home}
          element={<Navigate to={Paths.resumes} />}
        />
        { windowSize && windowSize.width > WindowSize.laptop ?
          <>
            <Route
              path={`${Paths.resumes}/*`}
              element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
            />
            <Route
              path={`${Paths.bookmarks}/*`}
              element={<BookmarkedCVPage students={StudentArray} CVInBookmarks={BookmarkedStudents} />}
            />
          </> :
          <>
            <Route
              path={Paths.resumes}
              element={<HomePage students={StudentArray} studentsInBookmarks={BookmarkedStudents} />}
            />
            <Route
              path={Paths.bookmarks}
              element={<BookmarkedCVPage students={StudentArray} CVInBookmarks={BookmarkedStudents} />}
            />
            {StudentArray.map(student =>
              <>
                <Route
                  path={`${Paths.resumes}/${student.id}`}
                  element={
                    <StudentCVPage
                      student={student}
                      isMarked={BookmarkedStudents.includes(student.id)}
                      onSendInvitationClick={() => true}
                      onAddToBookmarkClick={() => true}
                    />}
                  key={`${Paths.resumes}/${student.id}`}
                />
                <Route
                  path={`${Paths.bookmarks}/${student.id}`}
                  element={
                    <StudentCVPage
                      student={student}
                      isMarked={BookmarkedStudents.includes(student.id)}
                      onSendInvitationClick={() => true}
                      onAddToBookmarkClick={() => true}
                    />}
                  key={`${Paths.bookmarks}/${student.id}`}
                />
              </>
            )}
          </>
        }
        <Route
          path={Paths.responses}
          element={<ResponsesPage responses={ResponsesArray} onInvitationStatusClick={() => true} />}
        />
        <Route
          path={Paths.responses}
          element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
        />
      </Routes>

      <Footer />
    </>
  );
};

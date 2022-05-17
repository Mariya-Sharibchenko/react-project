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
  Paths,
} from 'context';
import { HomePage, ResponsesPage, StudentCVPage, BookmarkedCVPage, SettingsPage } from 'pages';
import { PasswordValidation } from 'mock';
import { useWindowSize } from 'utils/getWindowSize';
import { useStudents } from 'core/hooks';
import { userStateVar } from 'core/state';

interface ICompanyTemplateProps {
  user: ICompanyDataProps,
  notifications: INotificationsDataProps,
}

export const CompanyTemplate: React.FC<ICompanyTemplateProps> = ({
  user,
  notifications
}) => {
  const windowSize = useWindowSize();

  userStateVar({ user: user });

  const students = useStudents();

  return (
    <>
      {students.length &&
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
                  element={<HomePage students={students} />}
                />
                <Route
                  path={`${Paths.bookmarks}/*`}
                  element={<BookmarkedCVPage students={students} />}
                />
              </> :
              <>
                <Route
                  path={Paths.resumes}
                  element={<HomePage students={students} />}
                />
                <Route
                  path={Paths.bookmarks}
                  element={<BookmarkedCVPage students={students} />}
                />
                {students.map(student =>
                  <>
                    <Route
                      path={`${Paths.resumes}/${student.id}`}
                      element={
                        <StudentCVPage
                          student={student}
                        />}
                      key={`${Paths.resumes}/${student.id}`}
                    />
                    <Route
                      path={`${Paths.bookmarks}/${student.id}`}
                      element={
                        <StudentCVPage
                          student={student}
                        />}
                      key={`${Paths.bookmarks}/${student.id}`}
                    />
                  </>
                )}
              </>
            }
            <Route
              path={Paths.responses}
              element={<ResponsesPage onInvitationStatusClick={() => true} />}
            />
            <Route
              path={Paths.settings}
              element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
            />
          </Routes>

          <Footer />
        </>
      }
    </>
  );
};

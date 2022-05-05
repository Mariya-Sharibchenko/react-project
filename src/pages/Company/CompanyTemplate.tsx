import React, { useEffect } from 'react';
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
import { useGetBookmarks, useGetStudents, useUsers } from 'core/hooks';

interface ICompanyTemplateProps {
  user: ICompanyDataProps,
  notifications: INotificationsDataProps,
}

export const CompanyTemplate: React.FC<ICompanyTemplateProps> = ({
  user,
  notifications
}) => {
  const windowSize = useWindowSize();

  const students = useGetStudents();
  const studentsInBookmarks = useGetBookmarks(user.id);

  const { data, loading, error } = useUsers(user.id);

  useEffect(() => {
    if (!loading) {
      !error && console.log(data);
    }
  }, [loading, data]);

  return (
    <>
      {students.length && studentsInBookmarks.length &&
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
                  element={<HomePage students={students} studentsInBookmarks={studentsInBookmarks} />}
                />
                <Route
                  path={`${Paths.bookmarks}/*`}
                  element={<BookmarkedCVPage students={students} CVInBookmarks={studentsInBookmarks} />}
                />
              </> :
              <>
                <Route
                  path={Paths.resumes}
                  element={<HomePage students={students} studentsInBookmarks={studentsInBookmarks} />}
                />
                <Route
                  path={Paths.bookmarks}
                  element={<BookmarkedCVPage students={students} CVInBookmarks={studentsInBookmarks} />}
                />
                {students.map(student =>
                  <>
                    <Route
                      path={`${Paths.resumes}/${student.id}`}
                      element={
                        <StudentCVPage
                          student={student}
                          isMarked={studentsInBookmarks.includes(student.id)}
                        />}
                      key={`${Paths.resumes}/${student.id}`}
                    />
                    <Route
                      path={`${Paths.bookmarks}/${student.id}`}
                      element={
                        <StudentCVPage
                          student={student}
                          isMarked={studentsInBookmarks.includes(student.id)}
                        />}
                      key={`${Paths.bookmarks}/${student.id}`}
                    />
                  </>
                )}
              </>
            }
            <Route
              path={Paths.responses}
              element={<ResponsesPage user={user} studentsList={students} onInvitationStatusClick={() => true} />}
            />
            <Route
              path={Paths.responses}
              element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
            />
          </Routes>

          <Footer />
        </>
      }
    </>
  );
};

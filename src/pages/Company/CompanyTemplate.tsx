import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import {
  INotificationsDataProps,
  CompanyMenuItems,
  UserMenuItems,
  ICompanyDataProps,
  WindowSize,
  Paths, IStudentDetailedDataProps
} from 'context';
import { HomePage, ResponsesPage, StudentCVPage, BookmarkedCVPage, SettingsPage } from 'pages';
import { PasswordValidation } from 'mock';
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
  const [ students, setStudents ] = useState<IStudentDetailedDataProps[]>([]);
  const [ studentsInBookmarks, setStudentsInBookmarks ] = useState<number[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('https://69dd40e2-488f-4731-b0e0-b4671a6138ae.mock.pstmn.io/students');
      const studentsArray = await response.json();

      setStudents(Object.values(studentsArray));
    };

    const fetchStudentsInBookmarks = async () => {
      const response = await fetch('https://69dd40e2-488f-4731-b0e0-b4671a6138ae.mock.pstmn.io/bookmarked-students');
      const studentsIdArray = await response.json();

      setStudentsInBookmarks(studentsIdArray.studentsInBookmarks);
    };

    Promise.all([fetchStudents(), fetchStudentsInBookmarks()]).catch(console.error);
  }, [user]);

  return (
    <>
      {
        students.length !== 0 && studentsInBookmarks.length !== 0 &&
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
                  element={<HomePage students={students} studentsInBookmarks={studentsInBookmarks} />}
                />
                <Route
                  path={`${CompanyMenuItems[2].pathTo}/*`}
                  element={<BookmarkedCVPage students={students} CVInBookmarks={studentsInBookmarks} />}
                />
              </> :
              <>
                <Route
                  path={CompanyMenuItems[0].pathTo}
                  element={<HomePage students={students} studentsInBookmarks={studentsInBookmarks} />}
                />
                <Route
                  path={CompanyMenuItems[2].pathTo}
                  element={<BookmarkedCVPage students={students} CVInBookmarks={studentsInBookmarks} />}
                />
                {students.map(student =>
                  <>
                    <Route
                      path={`${CompanyMenuItems[0].pathTo}/${student.id}`}
                      element={
                        <StudentCVPage
                          student={student}
                          isMarked={studentsInBookmarks.includes(student.id)}
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
                          isMarked={studentsInBookmarks.includes(student.id)}
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
              element={<ResponsesPage studentsList={students} onInvitationStatusClick={() => true} />}
            />
            <Route
              path={UserMenuItems[1].pathTo}
              element={<SettingsPage submitPasswordChange={() => true} validationPassword={() => PasswordValidation} />}
            />
          </Routes>

          <Footer />
        </>
      }
    </>
  );
};

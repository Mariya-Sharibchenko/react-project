import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CompanyTemplate, HomePage, ResponsesPage } from 'pages/Company';
import { StudentTemplate, InvitationsPage } from 'pages/Student';
import {
  ArategCompany,
  InvitationsArray,
  NotificationsDataEmpty,
  NotificationsDataTwo,
  ResponsesArray,
  StudentArray
} from 'mock';
import { CompanyMenuItems, Paths } from 'context';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={Paths.main} element={<Navigate to={Paths.company} />} />
        <Route
          path={Paths.company}
          element={<CompanyTemplate user={ArategCompany} notifications={NotificationsDataEmpty} />}
        >
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
        </Route>

        <Route
          path={Paths.student}
          element={<StudentTemplate user={StudentArray[1]} notifications={NotificationsDataTwo} />}
        />
      </Routes>
    </div>
  );
};

export default App;

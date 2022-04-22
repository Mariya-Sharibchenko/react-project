import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { CompanyTemplate } from 'pages/Company';
import { StudentTemplate } from 'pages/Student';
import {
  ArategCompany,
  NotificationsDataEmpty,
  NotificationsDataTwo,
  StudentArray
} from 'mock';
import { Paths, UserTypes } from 'context';

interface IAppProps {
  userType: UserTypes.company | UserTypes.student
}

const App: React.FC<IAppProps> = ({ userType }) => {
  return (
    <div className="App">
      <Routes>
        { userType === UserTypes.company ?
          <Route
            path={Paths.main}
            element={<CompanyTemplate user={ArategCompany} notifications={NotificationsDataEmpty} />}
          /> :
          <Route
            path={Paths.main}
            element={<StudentTemplate user={StudentArray[1]} notifications={NotificationsDataTwo} />}
          />
        }
      </Routes>
    </div>
  );
};

export default App;

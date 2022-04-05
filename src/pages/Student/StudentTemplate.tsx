import React from 'react';

import {
  INotificationsDataProps,
  IStudentDataProps,
  StudentMenuItems,
  UserMenuItems
} from 'context';
import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';

interface IStudentTemplateProps {
  user: IStudentDataProps,
  notifications: INotificationsDataProps
}

export const StudentTemplate: React.FC<IStudentTemplateProps> = ({
  user,
  notifications,
  children
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

      {children}

      <Footer />
    </>
  );
};

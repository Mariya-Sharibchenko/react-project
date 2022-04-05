import React from 'react';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import {
  INotificationsDataProps,
  CompanyMenuItems,
  UserMenuItems,
  ICompanyDataProps
} from 'context';

interface ICompanyTemplateProps {
  user: ICompanyDataProps,
  notifications: INotificationsDataProps,
}

export const CompanyTemplate: React.FC<ICompanyTemplateProps> = ({
  children,
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

      {children}

      <Footer />
    </>
  );
};

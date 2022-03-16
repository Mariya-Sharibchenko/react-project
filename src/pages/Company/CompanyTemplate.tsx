import React from 'react';

import { Header, Footer } from 'templates/default';
import { NavbarMenu } from 'molecules';
import { INotificationsDataProps, IStudentDataProps, CompanyMenuItems, UserMenuItems } from 'context';

interface ICompanyTemplateProps {
  user: IStudentDataProps,
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
        <NavbarMenu menuItems={CompanyMenuItems} userMenuItems={UserMenuItems} notifications={notifications} user={user} />
      </Header>

      {children}

      <Footer />
    </>
  );
};

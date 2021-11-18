import { UserMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';

export const UserMenuItems: UserMenuItemProps[] = [
  {
    pathTo: '/user',
    icon: profileIcon,
    itemText: 'ПРОФИЛЬ',
  },
];

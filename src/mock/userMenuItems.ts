import { UserMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon_default.svg';
import profileIconActive from 'public/profile-icon_active.svg';

export const UserMenuItems: UserMenuItemProps[] = [
  {
    pathTo: '/user',
    icon: profileIcon,
    activeIcon: profileIconActive,
    itemText: 'ПРОФИЛЬ',
  },
];

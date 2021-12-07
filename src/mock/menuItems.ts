import { IMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';
import settingIcon from 'public/setting-icon.svg';
import signOutIcon from 'public/sign-out-icon.svg';

export const UserMenuItems: IMenuItemProps[] = [
  {
    pathTo: '/user',
    icon: profileIcon,
    itemText: 'ПРОФИЛЬ',
  },
  {
    pathTo: '/setting',
    icon: settingIcon,
    itemText: 'НАСТРОЙКИ',
  },
  {
    pathTo: '/',
    icon: signOutIcon,
    itemText: 'ВЫХОД',
  },
];

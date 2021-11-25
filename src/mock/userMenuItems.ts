import { UserMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';
import settingIcon from 'public/setting-icon.svg';
import signOutIcon from 'public/sign-out-icon.svg';
import bookmarkIcon from 'public/bookmark-icon.svg';

export const UserMenuItems: UserMenuItemProps[] = [
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
    pathTo: '/bookmarks',
    icon: bookmarkIcon,
    itemText: 'ИЗБРАННОЕ',
  },
  {
    pathTo: '/',
    icon: signOutIcon,
    itemText: 'ВЫХОД',
  },
];

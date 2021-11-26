import { MenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';
import settingIcon from 'public/setting-icon.svg';
import signOutIcon from 'public/sign-out-icon.svg';
import bookmarkIcon from 'public/bookmark-icon.svg';

export const UserMenuItems: MenuItemProps[] = [
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

export const NavbarMenuItems: MenuItemProps[] = [
  {
    pathTo: '/resumes',
    icon: bookmarkIcon,
    itemText: 'Резюме',
  },
  {
    pathTo: '/responses',
    icon: bookmarkIcon,
    itemText: 'Отклики',
  },
  {
    pathTo: '/bookmarks',
    icon: bookmarkIcon,
    itemText: 'Избранное',
  },
];

import { IMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';
import settingIcon from 'public/setting-icon.svg';
import signOutIcon from 'public/sign-out-icon.svg';
import bookmarkIcon from 'public/bookmark-icon.svg';
import responseIcon from 'public/response-icon.svg';
import resumeIcon from 'public/resume-icon.svg';

export const UserMenuItems: IMenuItemProps[] = [
  {
    pathTo: 'user',
    icon: profileIcon,
    itemText: 'ПРОФИЛЬ',
  },
  {
    pathTo: 'setting',
    icon: settingIcon,
    itemText: 'НАСТРОЙКИ',
  },
  {
    pathTo: '/',
    icon: signOutIcon,
    itemText: 'ВЫХОД',
  },
];

export const CompanyMenuItems: IMenuItemProps[] = [
  {
    pathTo: 'resumes',
    icon: resumeIcon,
    itemText: 'Резюме',
  },
  {
    pathTo: 'responses',
    icon: responseIcon,
    itemText: 'Отклики',
  },
  {
    pathTo: 'bookmarks',
    icon: bookmarkIcon,
    itemText: 'Избранное',
  },
];

export const StudentMenuItems: IMenuItemProps[] = [
  {
    pathTo: 'invitations',
    icon: responseIcon,
    itemText: 'Приглашения',
  },
];

import { IMenuItemProps } from 'context/interfaces';

import profileIcon from 'public/profile-icon.svg';
import settingIcon from 'public/setting-icon.svg';
import signOutIcon from 'public/sign-out-icon.svg';
import bookmarkIcon from 'public/bookmark-icon.svg';
import responseIcon from 'public/response-icon.svg';
import resumeIcon from 'public/resume-icon.svg';
import { Paths } from './global';

export const UserMenuItems: IMenuItemProps[] = [
  {
    pathTo: Paths.user,
    icon: profileIcon,
    itemText: 'ПРОФИЛЬ',
  },
  {
    pathTo: Paths.settings,
    icon: settingIcon,
    itemText: 'НАСТРОЙКИ',
  },
  {
    pathTo: Paths.home,
    icon: signOutIcon,
    itemText: 'ВЫХОД',
  },
];

export const CompanyMenuItems: IMenuItemProps[] = [
  {
    pathTo: Paths.resumes,
    icon: resumeIcon,
    itemText: 'Резюме',
  },
  {
    pathTo: Paths.responses,
    icon: responseIcon,
    itemText: 'Отклики',
  },
  {
    pathTo: Paths.bookmarks,
    icon: bookmarkIcon,
    itemText: 'Избранное',
  },
];

export const StudentMenuItems: IMenuItemProps[] = [
  {
    pathTo: Paths.invitations,
    icon: responseIcon,
    itemText: 'Приглашения',
  },
];

import styled from 'styled-components';

import { NotificationsContainer } from 'molecules/Notifications';
import { UserMenu} from 'molecules/UserMenu';
import { StudentImageInCircle } from 'atoms/StudentImages';

import Logo from 'public/Logo.png';
import { Colors, Shadow } from 'context';

const { secondaryColor, mainText } = Colors;
const { navbarShadow } = Shadow;

export interface IUserDropDownMenuProps {
  displayUserMenu: boolean
}

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 84px;
  position: fixed;
  z-index: 999;
  padding: 0 20%;
  box-shadow: ${navbarShadow};
  background-color: ${secondaryColor};
  display: flex;
`;

export const LogoWrapper = styled.div`
  width: 84px;
  height: 100%;
  margin-right: 130px;
  background: center no-repeat url(${Logo});
`;

export const MenuItemsWrapper = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const MenuItem = styled.li`
  margin: 0;
  &:not(:last-child) {
    margin-right: 48px;
  }
`;

export const MenuItemLink = styled.a`
  display: inline-block;
  padding: 33px 0;
  color: ${mainText};
  font-weight: 600;
`;

export const NotificationAndUserWrapper = styled.div`
  height: 100%;
  margin-left: auto;
  display: flex;
`;

export const NotificationsWrapper = styled(NotificationsContainer)`
  margin-right: 32px;
  padding: 24px 0;
`;

export const UserMenuWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const UserImage = styled(StudentImageInCircle)`
  margin: 18px 0;
  width: 48px;
  height: 48px;
`;

export const UserDropDownMenu = styled(UserMenu)<IUserDropDownMenuProps>`
  position: absolute;
  display: ${({displayUserMenu}) => displayUserMenu ? 'block' : 'none'};
  right: 0;
  top: 80px;
`;

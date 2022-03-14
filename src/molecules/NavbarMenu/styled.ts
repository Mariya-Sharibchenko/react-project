import styled from 'styled-components';

import { NotificationsContainer } from 'molecules/Notifications';

import Logo from 'public/Logo.png';
import { Colors, Shadow, Media } from 'context';

const { secondaryColor, mainText } = Colors;
const { navbarShadow } = Shadow;

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 84px;
  padding: 0 10px;
  box-shadow: ${navbarShadow};
  background-color: ${secondaryColor};
  display: flex;

  ${Media.tablet} {
    padding: 0 calc(50% - 333px);
  }
  
  ${Media.laptop} {
    padding: 0 calc(50% - 585px);
  }
`;

export const LogoWrapper = styled.div`
  width: 84px;
  height: 100%;
  margin-right: 30px;
  background: center no-repeat url(${Logo});
  ${Media.tablet} {
    margin-right: 130px;
  }
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

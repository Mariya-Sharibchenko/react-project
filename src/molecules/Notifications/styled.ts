import styled from 'styled-components';

import { DropDownWindow } from 'atoms/DropDownWindow';

export const NotificationsWrapper = styled.div`
  position: relative;
  width: 36px;
  margin: 0 auto;
`;

export const DropDownWindowWrapper = styled(DropDownWindow)`
  left: -239px;
  top: 5px;
  min-width: 280px;
`;

export const NotificationTextWrapper = styled.ul`
  padding: 31px 24px;
  margin: 0;
`;

export const NotificationTextItem = styled.li`
  list-style: none;
  margin: 0;
  text-align: left;
  
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
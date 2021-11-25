import React from 'react';

import styled from 'styled-components';

import { Colors, MaxNotificationNumberToDisplay } from 'context';
import bell from 'public/icon-notification.svg';

const { secondaryColor, invalidData } = Colors;

export interface NotificationCounterProps {
  notifications: number,
}

const StyledNotificationCounter = styled.div<NotificationCounterProps>`
  width: 36px;
  height: 36px;
  position: relative;
  background: center no-repeat url(${bell});

  &:after, &:before {
    display: ${({ notifications }) => notifications === 0 ? 'none' : 'block'};
    position: absolute;
  }
  
  &:after {
    content: '';
    right: 4px;
    top: 3px;
    width: 12px;
    height: 12px;
    background-color: ${invalidData};
    border: 1px solid ${secondaryColor};
    border-radius: 50%;
  }
  
  &:before {
    content: '${({ notifications }) => notifications > MaxNotificationNumberToDisplay 
            ? `${MaxNotificationNumberToDisplay}+` 
            : notifications}';
    right: ${({ notifications }) => {
      switch (true) {
        case notifications <= 10 :
          return '9px';
        case notifications < MaxNotificationNumberToDisplay :
          return '8px';
        default:
          return '6px';
      }
    }};
    top: 6px;
    font-size: 6px;
    font-weight: bold;
    color: ${secondaryColor};
    z-index: 1;
  }
`;

export const NotificationCounter: React.FC<NotificationCounterProps> = ({ notifications }) => {
  return (
    <StyledNotificationCounter notifications={notifications}/>
  )
};




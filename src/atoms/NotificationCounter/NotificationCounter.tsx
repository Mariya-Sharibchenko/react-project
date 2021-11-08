import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';
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
    content: '${({ notifications }) => notifications === 0 
            ?  '' 
            : notifications > 99 
                    ? '99+' 
                    : notifications}';
    right: ${({ notifications }) => notifications <= 10 
            ? '9px' 
            : notifications > 99 
                    ? '6px'
                    : '8px' };
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




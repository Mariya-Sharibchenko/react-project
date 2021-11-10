import React, { useMemo } from 'react';

import { NotificationCounter } from 'atoms/NotificationCounter';
import { NotificationsDataProps } from 'mock/notificationsData';

import { createNotificationMessages } from './utils/createNotificationMessages';
import { NotificationsWrapper, DropDownWindowWrapper, NotificationTextItem, NotificationTextWrapper} from './styled';

export interface NotificationsProps {
  notifications: NotificationsDataProps,
  menuIsOpened: boolean,
}

export const Notifications: React.FC<NotificationsProps> = ({notifications,menuIsOpened}) => {
  const notificationsCount = useMemo(() => {
    return  Object.values(notifications).reduce((item, sum) => sum + item, 0)
  }, [notifications]);

  return (
    <NotificationsWrapper>
      <NotificationCounter notifications={notificationsCount}/>

      { menuIsOpened
        ? <DropDownWindowWrapper>
            <NotificationTextWrapper>
              {createNotificationMessages(notifications).map((value) => {
                return <NotificationTextItem key={value}>
                  {value}
                </NotificationTextItem>
              })}
            </NotificationTextWrapper>
          </DropDownWindowWrapper>
        : <></>
      }
    </NotificationsWrapper>
  )
};




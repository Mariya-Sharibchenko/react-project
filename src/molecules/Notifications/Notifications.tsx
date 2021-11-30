import React, { useMemo } from 'react';

import { NotificationCounter } from 'atoms/NotificationCounter';
import { NotificationsDataProps } from 'context';

import { createNotificationMessages } from './utils/createNotificationMessages';
import { getNotificationSum } from './utils/getNotificationSum';
import { NotificationsWrapper, DropDownWindowWrapper, NotificationTextItem, NotificationTextWrapper} from './styled';

export interface INotificationsProps {
  notifications: NotificationsDataProps,
}

export interface NotificationsProps extends INotificationsProps {
  menuIsOpened: boolean,
  showNotifications: () => void,
}

export const Notifications: React.FC<NotificationsProps> = ({notifications,menuIsOpened, showNotifications}) => {
  const notificationsAmount = useMemo(() => getNotificationSum(notifications), [notifications]);
  const notificationsMessages = useMemo(() => createNotificationMessages(notifications), [notifications]);

  return (
    <NotificationsWrapper>
      <NotificationCounter notifications={notificationsAmount} onClick={showNotifications}/>

      { menuIsOpened &&
        <DropDownWindowWrapper>
          <NotificationTextWrapper>
            {notificationsMessages.map((value) => {
              return <NotificationTextItem key={value}>
                        {value}
                     </NotificationTextItem>
            })}
          </NotificationTextWrapper>
        </DropDownWindowWrapper>
      }
    </NotificationsWrapper>
  )
};




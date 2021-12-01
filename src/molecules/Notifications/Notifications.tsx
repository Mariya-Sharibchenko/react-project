import React, { useMemo } from 'react';

import { NotificationCounter } from 'atoms/NotificationCounter';
import { INotificationsDataProps } from 'context';

import { createNotificationMessages } from './utils/createNotificationMessages';
import { getNotificationSum } from './utils/getNotificationSum';
import { NotificationsWrapper, DropDownWindowWrapper, NotificationTextItem, NotificationTextWrapper} from './styled';

export interface INotificationsProps {
  notifications: INotificationsDataProps,
}

export interface INotificationsComponentProps extends INotificationsProps {
  menuIsOpened: boolean,
  showNotifications: () => void,
}

export const Notifications: React.FC<INotificationsComponentProps> = ({notifications,menuIsOpened, showNotifications}) => {
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




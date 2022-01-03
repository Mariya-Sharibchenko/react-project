import React, { useCallback, useState } from 'react';

import { INotificationsProps, Notifications } from './Notifications';

interface INotificationsContainerProps extends INotificationsProps {
  className?: string,
}

export const NotificationsContainer: React.FC<INotificationsContainerProps> = ({ notifications, className })  => {
  const [ isMenuOpened, setIsMenuOpened ] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, []);

  return (
    <Notifications notifications={notifications} menuIsOpened={isMenuOpened} showNotifications={onClick} className={className}/>
  )
};
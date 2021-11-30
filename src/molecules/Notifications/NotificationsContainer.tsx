import React, { useCallback, useState } from 'react';

import { INotificationsProps, Notifications } from './Notifications';

export const NotificationsContainer: React.FC<INotificationsProps> = ({ notifications })  => {
  const [ isMenuOpened, setIsMenuOpened ] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, []);

  return (
    <Notifications notifications={notifications} menuIsOpened={isMenuOpened} showNotifications={onClick}/>
  )
};
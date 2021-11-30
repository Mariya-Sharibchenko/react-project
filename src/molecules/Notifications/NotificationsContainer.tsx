import React, { useCallback, useState } from 'react';

import { NotificationsProps, Notifications } from './Notifications';

export const NotificationsContainer: React.FC<NotificationsProps> = ({ notifications })  => {
  const [ isMenuOpened, setIsMenuOpened ] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, []);

  return (
    <Notifications notifications={notifications} menuIsOpened={isMenuOpened} showNotifications={onClick}/>
  )
};
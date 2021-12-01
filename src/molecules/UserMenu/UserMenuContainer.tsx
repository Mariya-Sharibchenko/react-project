import React, { useCallback, useState } from 'react';

import { IUserMenuProps, UserMenu } from './UserMenu';

export const UserMenuContainer: React.FC<IUserMenuProps> = ({ user, menuFields })  => {
  const [ isMenuOpened, setIsMenuOpened ] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, []);

  return (
    <UserMenu user={user} menuFields={menuFields} menuIsOpened={isMenuOpened} showMenu={onClick}/>
  )
};
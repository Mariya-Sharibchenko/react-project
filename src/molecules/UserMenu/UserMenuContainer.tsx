import React, { useCallback, useState } from 'react';

import { IUserMenuProps, UserMenu } from './UserMenu';

interface IUserMenuContainerProps extends IUserMenuProps {
  className?: string,
}

export const UserMenuContainer: React.FC<IUserMenuContainerProps> = ({ user, menuFields, className })  => {
  const [ isMenuOpened, setIsMenuOpened ] = useState<boolean>(false);

  const onClick = useCallback(() => {
    setIsMenuOpened(prevState => !prevState)
  }, []);

  return (
    <UserMenu user={user} menuFields={menuFields} menuIsOpened={isMenuOpened} showMenu={onClick} className={className}/>
  )
};

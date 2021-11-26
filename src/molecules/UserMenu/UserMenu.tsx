import React from 'react';

import { MenuItemProps } from 'context';
import { UserMenuItem } from 'atoms/UserMenuItem';

import { DropDownWindowWrapper, UserMenuTitle, UserMenuItemWrapper, UserMenuItemsWrapper } from './styled';

export interface UserMenuProps {
  userName: string,
  menuFields: MenuItemProps[],

  className?: string
}

export const UserMenu: React.FC<UserMenuProps> = ({menuFields, userName, className}) => {
  return (
    <DropDownWindowWrapper className={className}>
      <UserMenuTitle>{userName}</UserMenuTitle>

      <UserMenuItemsWrapper>
        {menuFields.map(({pathTo, icon, itemText}) => {
          return <UserMenuItemWrapper key={pathTo}>
                   <UserMenuItem pathTo={pathTo} icon={icon} itemText={itemText}/>
                 </UserMenuItemWrapper>
        })}
      </UserMenuItemsWrapper>
    </DropDownWindowWrapper>
  )
}
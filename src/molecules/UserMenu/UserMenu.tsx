import React from 'react';

import { UserMenuItemProps } from 'context';
import { UserMenuItem } from 'atoms/UserMenuItem';

import { DropDownWindowWrapper, UserMenuTitle, UserMenuItemWrapper, UserMenuItemsWrapper } from './styled';

export interface UserMenuProps {
  userName: string,
  menuFields: UserMenuItemProps[],
}

export const UserMenu: React.FC<UserMenuProps> = ({menuFields, userName}) => {
  return (
    <DropDownWindowWrapper>
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
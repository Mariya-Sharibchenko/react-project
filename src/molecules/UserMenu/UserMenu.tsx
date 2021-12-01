import React from 'react';

import { IMenuItemProps } from 'context';
import { UserMenuItem } from 'atoms/UserMenuItem';

import { DropDownWindowWrapper, UserMenuTitle, UserMenuItemWrapper, UserMenuItemsWrapper } from './styled';

export interface IUserMenuProps {
  userName: string,
  menuFields: IMenuItemProps[],
}

export const UserMenu: React.FC<IUserMenuProps> = ({menuFields, userName}) => {
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
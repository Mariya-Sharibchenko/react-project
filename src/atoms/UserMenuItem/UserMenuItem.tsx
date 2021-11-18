import React from 'react';

import { UserMenuItemProps } from 'context/interfaces'

import { StyledItem, MenuIcon, MenuIconWrapper, ItemText } from './styled';

export const UserMenuItem: React.FC<UserMenuItemProps> = ({ pathTo, icon, itemText}) => {
  return (
    <StyledItem href={pathTo}>
      <MenuIconWrapper>
        <MenuIcon iconPath={icon}/>
      </MenuIconWrapper>
      <ItemText>{itemText}</ItemText>
    </StyledItem>
  )
};




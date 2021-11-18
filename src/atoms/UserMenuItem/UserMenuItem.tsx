import React from 'react';

import { UserMenuItemProps } from 'context/interfaces'

import { StyledItem, MenuIcon, ItemText } from './styled';

export const UserMenuItem: React.FC<UserMenuItemProps> = ({ pathTo, icon, activeIcon, itemText}) => {
  return (
    <StyledItem href={pathTo} defaultIconPath={icon} activeIconPath={activeIcon}>
      <MenuIcon />
      <ItemText>{itemText}</ItemText>
    </StyledItem>
  )
};




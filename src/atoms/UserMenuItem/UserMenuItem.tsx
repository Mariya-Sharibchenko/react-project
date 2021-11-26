import React from 'react';

import { MenuItemProps } from 'context/interfaces'

import { StyledItem, MenuIcon, MenuIconWrapper, ItemText } from './styled';

export const UserMenuItem: React.FC<MenuItemProps> = ({ pathTo, icon, itemText}) => {
  return (
    <StyledItem href={pathTo}>
      <MenuIconWrapper>
        <MenuIcon iconPath={icon}/>
      </MenuIconWrapper>
      <ItemText>{itemText}</ItemText>
    </StyledItem>
  )
};




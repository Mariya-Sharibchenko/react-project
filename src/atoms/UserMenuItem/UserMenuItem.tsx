import React from 'react';

import { IMenuItemProps } from 'context/interfaces';

import { StyledItem, MenuIcon, MenuIconWrapper, ItemText } from './styled';

export const UserMenuItem: React.FC<IMenuItemProps> = ({ pathTo, icon, itemText}) => {
  return (
    <StyledItem to={pathTo}>
      <MenuIconWrapper>
        <MenuIcon iconPath={icon} />
      </MenuIconWrapper>
      <ItemText>{itemText}</ItemText>
    </StyledItem>
  );
};




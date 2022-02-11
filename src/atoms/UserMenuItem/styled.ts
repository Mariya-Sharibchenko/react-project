import styled from 'styled-components';

import { Colors } from 'context/styles';

const { mainColor, mainText, borderColor } = Colors;

export interface IIconProps {
  iconPath: string,
}

export const MenuIcon = styled.img.attrs<IIconProps>(({ iconPath }) => ({
  src: `${iconPath}`,
}))<IIconProps>`
  filter: invert(49%) sepia(97%) saturate(34%) hue-rotate(192deg) brightness(85%) contrast(85%);
`;

export const MenuIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 13px;
  border-radius: 5px;
  background-color: ${borderColor};
`;

export const StyledItem = styled.a`
  display: flex;
  width: 100%;
  
  &:hover > ${MenuIconWrapper}, &:active > ${MenuIconWrapper}, &:focus > ${MenuIconWrapper} {
    background-color: ${mainColor};
  }

  &:hover ${MenuIcon}, &:active ${MenuIcon}, &:focus ${MenuIcon} {
    filter: none;
  }
`;

export const ItemText = styled.div`
  line-height: 36px;
  color: ${mainText};
  font-weight: 700;
`;

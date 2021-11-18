import styled from 'styled-components';

import { Colors } from 'context/styles';
import logo from 'logo.svg'

const { mainText } = Colors;

export interface IconProps {
  defaultIconPath: string,
  activeIconPath: string,
}

export const MenuIcon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 13px;
`;

export const StyledItem = styled.a<IconProps>`
  display: flex;
  max-height: 85px;
  width: 100%;
  padding: 24px 13px;

  & > ${MenuIcon} {
    background:  ${({defaultIconPath}) => `center no-repeat url(${defaultIconPath})`};
  }
  
  &:hover > ${MenuIcon}, &:active > ${MenuIcon}, &:focus > ${MenuIcon} {
    background:  ${({activeIconPath}) => `center no-repeat url(${activeIconPath})`};
  }
`;

export const ItemText = styled.div`
  line-height: 36px;
  color: ${mainText};
  font-weight: 700;
`
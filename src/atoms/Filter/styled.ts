import styled from 'styled-components';

import { DropDownWindow } from 'atoms/DropDownWindow';

import arrowUp from 'public/arrow-up-icon.svg';
import arrowDown from 'public/arrow-down-icon.svg';
import { Colors } from 'context';

const { mainText, secondaryText, borderColor } = Colors;

interface ISelectProps {
  selectIsOpened: boolean
}

interface IOptionProps {
  isChecked: boolean,
}

export const FilterWrapper = styled.div`
  max-width: 178px;
`;

export const StyledFilterTitle = styled.div<ISelectProps>`
  padding-left: 12px;
  color: ${secondaryText};
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
  position: relative;
  
  &:after {
    position: absolute;
    content: ${({selectIsOpened}) => selectIsOpened ? `url(${arrowUp})` : `url(${arrowDown})`};
    width: 24px;
    height: 24px;
    bottom: -2px;
    right: 22px;
  }
`;

export const StyledFilter = styled(DropDownWindow)<ISelectProps>`
  min-width: 168px;
  max-width: 253px;
  box-shadow: ${({selectIsOpened}) => selectIsOpened
  ? '0 3px 9px rgba(225, 226, 230, 0.8)'
  : 'none'};
  display: ${({selectIsOpened}) => !selectIsOpened && 'none'};
`;

export const OptionsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Option = styled.li<IOptionProps>`
  list-style: none;
  cursor: pointer;
  min-height: 35px;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  font-size: 12px;
  color: ${({ isChecked }) => isChecked ? secondaryText : mainText};
  margin: 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${borderColor};
  }
`;

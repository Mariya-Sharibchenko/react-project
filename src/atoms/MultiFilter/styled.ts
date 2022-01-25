import styled from 'styled-components';

import { Checkbox } from 'atoms/Checkbox';

import arrowUp from 'public/arrow-up-icon.svg';
import arrowDown from 'public/arrow-down-icon.svg';
import { Colors } from 'context';

const { mainText, secondaryText, filterBackground, secondaryColor, mainColor, borderColor } = Colors;

interface ISelectProps {
  selectIsOpened: boolean
}

export const FilterWrapper = styled.div``;

export const StyledFilter = styled.div<ISelectProps> `
  max-width: 253px;
  box-shadow: ${({selectIsOpened}) => selectIsOpened
  ? '0 3px 9px rgba(225, 226, 230, 0.8)'
  : 'none'};
`;

export const StyledFilterTitle = styled.div`
  color: ${mainText};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const StyledSelect = styled.div<ISelectProps>`
  width: 253px;
  height: 49px;
  color: ${({selectIsOpened}) => selectIsOpened ? mainText : secondaryText};
  padding: 12px 15px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  border: 0;
  border-bottom: ${({selectIsOpened}) => selectIsOpened
  ? `2px solid ${mainColor}`
  : `1px solid ${secondaryText}`};
  -moz-appearance: none; 
  -webkit-appearance: none; 
  appearance: none;
  position: relative;
  background: ${({selectIsOpened}) => selectIsOpened
  ? `right 15px center no-repeat ${`url(${arrowUp})`} ${secondaryColor}`
  : `right 15px center no-repeat ${`url(${arrowDown})`} ${filterBackground}`};
  background-size: 24px;
  
  
  &:focus, &:active {
    outline: none;
    border-bottom: 1px solid ${secondaryText};
  }
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonSelectAll = styled.button`
  min-height: 35px;
  text-align: left;
  color: ${secondaryText};
  font-size: 12px;
  padding: 9px 15px;
  background-color: ${secondaryColor};
  border: 0;
  border-bottom: 1px solid ${borderColor};
`;

export const Option = styled(Checkbox)`
  position: relative;
  cursor: pointer;
  min-height: 47px;
  width: 100%;
  padding: 11px 42px;
  text-align: left;
  line-height: 24px;
  border: 0;
  border-bottom: 1px solid ${borderColor};
`;

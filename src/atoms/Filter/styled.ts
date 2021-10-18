import styled from 'styled-components';
import arrowUp from 'public/arrow-up-icon.svg';
import arrowDown from 'public/arrow-down-icon.svg';
import { Colors } from 'context';
import { Checkmark } from '../Checkmark';

const { mainText, secondaryText, filterBackground, secondaryColor, mainColor, borderColor } = Colors;

interface SelectProps {
  selectIsOpened: boolean
}

export const FilterWrapper = styled.div<SelectProps> `
  max-width: 253px;
  box-shadow: ${({selectIsOpened}) => selectIsOpened 
          ? '0 3px 9px rgba(225, 226, 230, 0.8)' 
          : 'none'};
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select<SelectProps>`
  width: 253px;
  height: 49px;
  color: ${({selectIsOpened}) => selectIsOpened ? mainText : secondaryText};
  padding: 12px 15px;
  font-size: 14px;
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

export const ElementToHideDefaultOption = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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

export const Option = styled.label`
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

export const OptionCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:not(:checked) ~ ${Checkmark} {
    background-color: transparent;
    border: 1px solid #7F818A;
    
    &:after {
      display: none;
    }
  }
`;
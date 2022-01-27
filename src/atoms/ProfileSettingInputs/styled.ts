import styled from 'styled-components';

import { Colors } from 'context';
import arrowUp from 'public/arrow-up-icon.svg';
import arrowDown from 'public/arrow-down-icon.svg';

const { backgroundColor, borderColor, invalidData, secondaryText, filterBackground, mainColor, mainText } = Colors;

export interface ILabelTextProps {
  isRequired: boolean,
}

export interface IInputProps {
  isValid: boolean,
  className?: string,
}

export interface IInputWithFilter {
  isOpened: boolean,
}

export const InputWrapper = styled.label`
  max-width: 538px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

export const LabelText = styled.span<ILabelTextProps>`
  margin-bottom: 4px;
  color: ${backgroundColor};
  line-height: 27px;
  position: relative;
  
  &:after {
    display: ${({isRequired}) => isRequired ? 'unset' : 'none'};
    position: absolute;
    content: '*';
    color: ${invalidData};
    right: -15px;
  }
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Input = styled.input<IInputProps>`
  min-height: 60px;
  min-width: 100%;
  padding: 0 32px 0 16px;
  outline: none;
  border: 0;
  border-bottom: ${({isValid}) => isValid ? `2px solid ${secondaryText}` : `2px solid ${invalidData}`};
  background-color: ${filterBackground};
  color: ${mainText};
  cursor: default;
  font-size: 16px;

  &:focus, &:active {
    border-bottom: 2px solid ${mainColor};
  }
  
  @media (min-width: 768px) {
    min-width: 370px;
  }
`;

export const InputWithFilterWrapper = styled.div`
  cursor: pointer;
`;

export const InputWithFilter = styled(Input)`
  cursor: pointer;
  caret-color: transparent;
`;

export const Arrow = styled.div<IInputWithFilter>`
  position: absolute;
  right: 17px;
  top: 18px;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background: ${({isOpened}) => isOpened ? `center no-repeat url(${arrowUp}) ${borderColor}` 
                                         : `center no-repeat url(${arrowDown}) ${borderColor}`};
`;

export const OptionsWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${borderColor};
`;

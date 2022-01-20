import styled from 'styled-components';

import { Colors } from 'context';

const { backgroundColor, invalidData, secondaryText, filterBackground, mainColor, mainText } = Colors;

export interface ILabelTextProps {
  isRequired: boolean,
}

export interface ISettingInputProps {
  isValid: boolean
}

export const InputWrapper = styled.label`
  max-width: 538px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export const Input = styled.input<ISettingInputProps>`
  &::-webkit-calendar-picker-indicator {
    appearance: none;
    display: none;
  }
  //&::-webkit-datetime-edit-month-field,
  //&::-webkit-datetime-edit-day-field,
  //&::-webkit-datetime-edit-year-field,
  //&::-webkit-datetime-edit-text {
  //  
  //}

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

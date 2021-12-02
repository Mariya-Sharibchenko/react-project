import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, mainText, secondaryText, invalidData, filterBackground } = Colors;

export interface IStyledInputProps {
  isValid: boolean,
}

export const StyledInput = styled.input<IStyledInputProps>`
  min-height: 60px;
  padding: 0 32px 0 16px;
  outline: none;
  border: 0;
  border-bottom: ${({isValid}) => isValid ? `2px solid ${secondaryText}` : `2px solid ${invalidData}`};
  background-color: ${filterBackground};
  color: ${({isValid}) => isValid ? mainText : invalidData};
  cursor: text;
  font-size: 16px;
  
  &:focus, &:active {
    border-bottom: ${({isValid}) => isValid ? `2px solid ${mainColor}` : `2px solid ${invalidData}`};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 354px;
`;

export const StyledLabelText = styled.span<IStyledInputProps>`
  margin-bottom: 6px;
  color: ${({isValid}) => isValid ? mainText : invalidData};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, secondaryColor, mainText } = Colors;

export interface IStyledButtonProps {
  btnColor?: string;
}

export interface ButtonProps extends IStyledButtonProps {
  text: string;
  onClick?: () => void;
}

const StyledButton = styled.button<IStyledButtonProps>`
  min-width: 236px;
  min-height: 60px;
  border: 0;
  background-color: ${({btnColor}) => btnColor ? btnColor : mainColor};
  color: ${({btnColor}) => btnColor === mainText ? secondaryColor : mainText};
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
`;

export const Button: React.FC<ButtonProps> = ({ text, onClick, btnColor }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      btnColor={btnColor}
    >
      { text }
    </StyledButton>
  )
};




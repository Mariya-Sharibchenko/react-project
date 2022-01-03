import React from 'react';

import styled from 'styled-components';

import { Colors } from 'context';

const { mainColor, secondaryColor, mainText } = Colors;

export interface IStyledButtonProps {
  btnColor?: string;
}

export interface IButtonProps extends IStyledButtonProps {
  text: string;
  onClick?: () => void;

  className?: string
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

export const Button: React.FC<IButtonProps> = ({ text, onClick, btnColor, className }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      btnColor={btnColor}
      className={className}
    >
      { text }
    </StyledButton>
  )
};




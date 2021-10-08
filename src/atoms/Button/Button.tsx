import React from 'react';

import styled from 'styled-components';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  btnColor?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      { text }
    </button>
  )
}

export const StyledButton = styled(Button)`
  min-width: 236px;
  min-height: 60px;
  border: 0;
  background-color: ${props => props.btnColor ? props.btnColor : '#FDDD09'};
  color: ${props => props.btnColor === '#000000' ? '#FFFFFF' : '#000000'};
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
`;


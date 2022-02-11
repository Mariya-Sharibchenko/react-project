import React from 'react';

import styled from 'styled-components';

import { Checkmark } from 'atoms/Checkmark';
import { Colors } from 'context';

const { borderColor } = Colors;

export interface ICheckboxProps {
  value: string,
  label?: string,
  onCheckboxSelect: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isChecked: boolean,
  className?: string,
}

const CheckboxWrapper = styled.label`
  position: relative;
  cursor: pointer;
  min-height: 47px;
  width: 100%;
  padding: 0 20px;
  text-align: left;
  border: 0;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:not(:checked) ~ ${Checkmark} {
    background-color: transparent;
    border: 1px solid ${borderColor};

    &:after {
      display: none;
    }
  }
`;

export const Checkbox: React.FC<ICheckboxProps> = ({
  value,
  label,
  onCheckboxSelect,
  isChecked,
  className
}) => {
  return (
    <CheckboxWrapper htmlFor={label} className={className}>
      <CheckboxInput
        type='checkbox'
        id={label}
        onChange={onCheckboxSelect}
        checked={isChecked}
      />
      <Checkmark />
      {value}
    </CheckboxWrapper>
  );
};

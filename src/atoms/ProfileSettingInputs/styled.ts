import styled from 'styled-components';

import { Colors, Media } from 'context';
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
  
  ${Media.tablet} {
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

  ${Media.tablet} {
    margin-bottom: 0;
  }
`;

export const Textarea = styled.textarea<IInputProps>`
  min-height: 120px;
  min-width: 100%;
  padding: 18px 32px 0 16px;
  outline: none;
  resize: none;
  border: 0;
  border-bottom: ${({isValid}) => isValid ? `2px solid ${secondaryText}` : `2px solid ${invalidData}`};
  background-color: ${filterBackground};
  color: ${mainText};
  cursor: default;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;

  &:focus, &:active {
    border-bottom: 2px solid ${mainColor};
  }

  ${Media.tablet} {
    min-width: 370px;
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

  ${Media.tablet} {
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

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${borderColor};
`;

export const Option = styled.li`
  list-style: none;
  cursor: pointer;
  min-height: 35px;
  width: 100%;
  padding: 10px 12px;
  text-align: left;
  font-size: 12px;
  margin: 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${borderColor};
  }
`;

export const SkillsList = styled.ul`
  z-index: 11;
  max-width: 370px;
  margin: 7px 0 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const SkillsItem = styled.li`
  margin: 0 6px 6px 0;
  padding: 0;
`;

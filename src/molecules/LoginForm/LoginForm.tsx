import React from 'react';

import { Button } from 'atoms';
import {
  InputEmailLabel,
  InputEmailPlaceholder,
  InputPasswordLabel,
  InputPasswordPlaceholder,
  InputTypes,
  LoginEnterButton,
  LoginTitle,
  TextForLoginCheckbox,
  WrongLoginData,
} from 'context';

import {
  ContentWrapper,
  LoginFormWrapper,
  LogoWrapper,
  Title,
  LoginCheckbox,
  LoginInput,
  WrongDataText,
} from './styled';

export interface ILoginFormProps {
  onLoginClick: () => void,
  isDataValid: boolean,
  inputValidation: (value: string) => boolean,
  setInputValue: (value: string, type: InputTypes) => void,
  onStayInSystemClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStayInSystemChecked: boolean,
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onLoginClick,
  isDataValid,
  inputValidation,
  setInputValue,
  onStayInSystemClick,
  isStayInSystemChecked,
}) => {
  return (
    <LoginFormWrapper>
      <LogoWrapper />

      <ContentWrapper>
        <Title>{LoginTitle}</Title>

        {!isDataValid && <WrongDataText>{WrongLoginData}</WrongDataText>}

        <LoginInput
          placeholderText={InputEmailPlaceholder}
          type={InputTypes.email}
          labelText={InputEmailLabel}
          validationFunction={inputValidation}
          getInputValue={setInputValue}
        />

        <LoginInput
          placeholderText={InputPasswordPlaceholder}
          type={InputTypes.password}
          labelText={InputPasswordLabel}
          validationFunction={inputValidation}
          getInputValue={setInputValue}
        />

        <LoginCheckbox
          value={TextForLoginCheckbox}
          onCheckboxSelect={onStayInSystemClick}
          isChecked={isStayInSystemChecked}
        />

        <Button
          text={LoginEnterButton}
          onClick={onLoginClick}
        />
      </ContentWrapper>
    </LoginFormWrapper>
  );
};

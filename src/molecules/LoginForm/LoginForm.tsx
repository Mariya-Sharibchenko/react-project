import React from 'react';

import { Button } from 'atoms/Button';
import {
  InputEmailLabel,
  InputEmailPlaceholder,
  InputPasswordLabel,
  InputPasswordPlaceholder,
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
  setEmail: (value: string) => void,
  setPassword: (value: string) => void,
  onStayInSystemClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStayInSystemChecked: boolean,
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onLoginClick,
  isDataValid,
  inputValidation,
  setEmail,
  setPassword,
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
          type="email"
          labelText={InputEmailLabel}
          validationFunction={inputValidation}
          getInputValue={setEmail}
        />

        <LoginInput
          placeholderText={InputPasswordPlaceholder}
          type="password"
          labelText={InputPasswordLabel}
          validationFunction={inputValidation}
          getInputValue={setPassword}
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

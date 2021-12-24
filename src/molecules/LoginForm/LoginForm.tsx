import React from 'react';

import { InputContainer } from 'atoms/Input/InputContainer';
import { Button } from 'atoms/Button';
import {
  InputEmailLabel,
  InputEmailPlaceholder, InputPasswordLabel, InputPasswordPlaceholder,
  LoginEnterButton,
  LoginTitle,
  TextForLoginCheckbox
} from 'context';

import {
  ContentWrapper,
  LoginFormWrapper,
  LogoWrapper,
  Title,
  LoginCheckbox
} from './styled';

export interface ILoginFormProps {
  onLoginClick: () => void,
  validation: (value: string) => boolean,
  onStayInSystemClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStayInSystemChecked: boolean,
}

export const LoginForm: React.FC<ILoginFormProps> = ({ onLoginClick, validation, onStayInSystemClick, isStayInSystemChecked }) => {
  return (
    <LoginFormWrapper>
      <LogoWrapper/>

      <ContentWrapper>
        <Title>{LoginTitle}</Title>

        <InputContainer placeholderText={InputEmailPlaceholder}
                        type='email'
                        labelText={InputEmailLabel}
                        validationFunction={validation} />

        <InputContainer placeholderText={InputPasswordPlaceholder}
                        type='password'
                        labelText={InputPasswordLabel}
                        validationFunction={validation} />

        <LoginCheckbox value={TextForLoginCheckbox} onCheckboxSelect={onStayInSystemClick} isChecked={isStayInSystemChecked}/>

        <Button text={LoginEnterButton} onClick={onLoginClick}/>
      </ContentWrapper>
    </LoginFormWrapper>
  )
};

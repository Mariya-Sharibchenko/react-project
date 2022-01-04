import React, { useCallback, useReducer } from 'react';

import { InputTypes } from 'context';

import { LoginForm } from './LoginForm';
import { ILoginDataProps, initialFormData, formReducer, LoginFormActions } from './reducer';

interface ILoginFormContainerProps {
  inputValidation: (value: string) => boolean,
  onSubmitClick: (data: ILoginDataProps) => void,
  isDataValid: boolean,
}

export const LoginFormContainer: React.FC<ILoginFormContainerProps> = ({
  inputValidation,
  onSubmitClick,
  isDataValid,
}) => {

  const [ formData, dispatch ] = useReducer(formReducer, initialFormData);

  const onStayInSystemClick = useCallback(() =>
    dispatch({
      type: LoginFormActions.checkbox,
      field: 'stayInSystem'
    }), []
  );

  const setInputValue = (value: string, type: InputTypes) => {
    dispatch({
      type: LoginFormActions.input,
      field: type,
      payload: value,
    });
  };

  const onLoginClick = () => {
    formData.email && formData.password && onSubmitClick(formData);
  };

  return (
    <LoginForm
      inputValidation={inputValidation}
      setInputValue={setInputValue}
      onStayInSystemClick={onStayInSystemClick}
      isStayInSystemChecked={formData.stayInSystem}
      onLoginClick={onLoginClick}
      isDataValid={isDataValid}
    />
  );
};

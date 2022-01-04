import React, { useCallback, useState } from 'react';

import { LoginForm } from './LoginForm';

interface ILoginDataProps {
  email: string | undefined,
  password: string | undefined,
  stayInSystem: boolean,
}

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
  const [ stayInSystem, setStayInSystem ] = useState<boolean>(false);
  const [ formData, setFormData ] = useState<ILoginDataProps>({
    email: undefined,
    password: undefined,
    stayInSystem: stayInSystem,
  });

  const onStayInSystemClick = useCallback(() => setStayInSystem(prevState => !prevState), []);

  const setEmail = (value: string) => {
    setFormData({ ...formData, email: value });
  };

  const setPassword = (value: string) => {
    setFormData({ ...formData, password: value });
  };

  const onLoginClick = () => {
    formData.email && formData.password && onSubmitClick(formData);
  };

  return (
    <LoginForm
      inputValidation={inputValidation}
      setEmail={setEmail}
      setPassword={setPassword}
      onStayInSystemClick={onStayInSystemClick}
      isStayInSystemChecked={stayInSystem}
      onLoginClick={onLoginClick}
      isDataValid={isDataValid}
    />
  );
};

import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';

import { ChangePasswordForm } from 'molecules';
import { PasswordDataValidationTypes, ProfileDataTypes } from 'context';
import { IPasswordDataProps, passwordFormReducer, initialPasswordData, PasswordFormAction } from './reducer';

export interface IChangePasswordFormContainerProps {
  submitFunction: (data: IPasswordDataProps) => void,
  validationFunction: (data: IPasswordDataProps) => PasswordDataValidationTypes
}

export const ChangePasswordFormContainer: React.FC<IChangePasswordFormContainerProps> = ({
  submitFunction,
  validationFunction
}) => {
  const [ data, dispatch ] = useReducer(passwordFormReducer, initialPasswordData);
  const [ isDataValid, setIsDataValid ] = useState<PasswordDataValidationTypes>({ currentPassword: true, newPassword: true });

  const allFieldsValid = useMemo(() => Object.values(isDataValid).every(Boolean), [ isDataValid ]);

  useEffect(() => {
    setIsDataValid(validationFunction(data));
  }, [ data ]);

  const setValue = useCallback((id: ProfileDataTypes, value: string) => {
    dispatch({
      type: PasswordFormAction.SET_PASSWORD_VALUE,
      field: id,
      payload: value
    });
  }, []);

  const onSubmitClick = useCallback(() => allFieldsValid && submitFunction(data), [ allFieldsValid, data ]);

  return (
    <ChangePasswordForm
      onSubmitClick={onSubmitClick}
      getValue={setValue}
      isValid={isDataValid}
    />
  );
};

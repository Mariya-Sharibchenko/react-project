import { PasswordDataTypes, ProfileDataTypes } from 'context';

export enum PasswordFormAction {
  SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE',
}

export interface IPasswordFormActions {
  type: PasswordFormAction,
  field: ProfileDataTypes,
  payload?: string
}

export interface IPasswordDataProps {
  currentPassword: string | undefined,
  newPassword: string | undefined
}

export const initialPasswordData: IPasswordDataProps = {
  currentPassword: undefined,
  newPassword: undefined
};

export const passwordFormReducer = (state: IPasswordDataProps, action: IPasswordFormActions): IPasswordDataProps => {
  const { type, field, payload } = action;

  switch (type) {
    case PasswordFormAction.SET_PASSWORD_VALUE:
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

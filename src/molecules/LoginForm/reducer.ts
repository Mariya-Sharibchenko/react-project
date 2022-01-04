import { InputTypes } from 'context';

export enum LoginFormActions {
  checkbox = 'TOGGLE CHECKBOX',
  input = 'SET INPUT',
}

export interface ILoginFormActionsProps {
  type: LoginFormActions,
  field: 'stayInSystem' | InputTypes,
  payload?: string,
}

export interface ILoginDataProps {
  email: string | undefined,
  password: string | undefined,
  stayInSystem: boolean,
}

export const initialFormData: ILoginDataProps = {
  email: undefined,
  password: undefined,
  stayInSystem: false,
};

export const formReducer = (state: ILoginDataProps, action: ILoginFormActionsProps): ILoginDataProps => {
  const { type, field, payload } = action;

  switch (type) {
    case LoginFormActions.checkbox:
      return {
        ...state,
        stayInSystem: !state.stayInSystem,
      };
    case LoginFormActions.input:
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

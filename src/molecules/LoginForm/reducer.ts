import { InputTypes } from 'context';

export enum LoginFormActions {
  TOGGLE_CHECKBOX = 'TOGGLE CHECKBOX',
  SET_INPUT_VALUE = 'SET INPUT VALUE',
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
    case LoginFormActions.TOGGLE_CHECKBOX:
      return {
        ...state,
        stayInSystem: !state.stayInSystem,
      };
    case LoginFormActions.SET_INPUT_VALUE:
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

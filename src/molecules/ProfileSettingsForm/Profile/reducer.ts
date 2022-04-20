import { ProfileSettingInputs, SocialMedia } from 'context';

export enum ProfileSettingsFormActions {
  SET_INPUT_VALUE = 'SET_INPUT_VALUE',
}

export interface IProfileSettingsFormActions {
  type: ProfileSettingsFormActions,
  field: ProfileSettingInputs | SocialMedia,
  payload?: string | string[]
}

export interface IProfileDataProps {
  name: string | undefined,
  education: string | undefined,
  birthDate: string | undefined,
  city: string | undefined,
  phone: string | undefined,
  email: string | undefined,
  english: string | undefined,
  additionalEducation?: string | undefined,
  skills: string[] | undefined,
  about: string | undefined,
  facebook?: string | undefined,
  instagram?: string | undefined,
  linkedin?: string | undefined,
  vk?: string | undefined
}

export const initialFormData: IProfileDataProps = {
  name: undefined,
  education: undefined,
  birthDate: undefined,
  city: undefined,
  phone: undefined,
  email: undefined,
  english: undefined,
  skills: undefined,
  about: undefined,
};

export const formReducer = (state: IProfileDataProps, action: IProfileSettingsFormActions): IProfileDataProps => {
  const { type, field, payload } = action;

  switch (type) {
    case ProfileSettingsFormActions.SET_INPUT_VALUE:
      return {
        ...state,
        [field]: payload,
      };
    default:
      return state;
  }
};

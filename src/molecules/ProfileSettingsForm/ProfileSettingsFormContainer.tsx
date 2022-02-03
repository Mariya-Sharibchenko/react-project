import React, { useReducer } from 'react';

import { ProfileSettingsForm } from './ProfileSettingsForm';
import { ProfileSettingsFormActions, formReducer, initialFormData, IProfileDataProps } from './reducer';
import { IFilterOptionsProps, ProfileSettingInputs, SocialMedia } from 'context';

export interface IProfileSettingsFormContainerProps {
  submitData: (data: IProfileDataProps) => void,
  englishLevelsArray: IFilterOptionsProps[],
  educationLevelsArray: IFilterOptionsProps[],
  skillsArray: string[],
  isValid: boolean
}

export const ProfileSettingsFormContainer: React.FC<IProfileSettingsFormContainerProps> = ({
  submitData,
  englishLevelsArray,
  educationLevelsArray,
  skillsArray,
  isValid
}) => {

  const [ data, dispatch ] = useReducer(formReducer, initialFormData);

  const setValue = ( id: ProfileSettingInputs | SocialMedia, value: string | string[] ) => {
    dispatch({
      type: ProfileSettingsFormActions.SET_INPUT_VALUE,
      field: id,
      payload: value,
    });
  };

  const onSubmitClick = () => {
    console.log(data)
    isValid && submitData(data)
  }

  return (
    <ProfileSettingsForm
      onSubmitClick={onSubmitClick}
      englishLevelsArray={englishLevelsArray}
      educationLevelsArray={educationLevelsArray}
      skillsArray={skillsArray}
      getSkills={setValue}
      getValue={setValue}
      isValid={isValid}
    />
  )
};

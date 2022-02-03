import React, { useMemo, useReducer, useState } from 'react';

import { ProfileSettingsForm } from './ProfileSettingsForm';
import { ProfileSettingsFormActions, formReducer, initialFormData, IProfileDataProps } from './reducer';
import {
  IFilterOptionsProps,
  ProfileDataTypes,
  ProfileDataValidationTypes
} from 'context';

export interface IProfileSettingsFormContainerProps {
  submitData: (data: IProfileDataProps) => void,
  englishLevelsArray: IFilterOptionsProps[],
  educationLevelsArray: IFilterOptionsProps[],
  skillsArray: string[],
  isValid: ProfileDataValidationTypes,
}

export const ProfileSettingsFormContainer: React.FC<IProfileSettingsFormContainerProps> = ({
  submitData,
  englishLevelsArray,
  educationLevelsArray,
  skillsArray,
  isValid
}) => {
  const [ data, dispatch ] = useReducer(formReducer, initialFormData);
  // const isDataValid = useMemo(isValid if all fields are true ? true : false, isValid);

  const setValue = ( id: ProfileDataTypes, value: string | string[] ) => {
    dispatch({
      type: ProfileSettingsFormActions.SET_INPUT_VALUE,
      field: id,
      payload: value,
    });
  };

  const onSubmitClick = () => {
    // isDataValid && submitData(data)
    submitData(data)
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

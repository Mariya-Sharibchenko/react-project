import React, { useEffect, useMemo, useReducer, useState } from 'react';

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
  validationFunction: (data: IProfileDataProps) => ProfileDataValidationTypes
}

export const ProfileSettingsFormContainer: React.FC<IProfileSettingsFormContainerProps> = ({
  submitData,
  englishLevelsArray,
  educationLevelsArray,
  skillsArray,
  validationFunction,
}) => {

  const [ data, dispatch ] = useReducer(formReducer, initialFormData);

  const initialIsDataValid = {
    name: true,
    birthDate: true,
    city: true,
    phone: true,
    email: true,
    english: true,
    education: true,
    additionalEducation: true,
    skills: true,
    about: true,
    facebook: true,
    instagram: true,
    linkedin: true,
    vk: true,
  };
  const [ isDataValid, setIsDataValid ] = useState<ProfileDataValidationTypes>(initialIsDataValid);

  const allFieldsValid = useMemo(() => Object.values(isDataValid).every(Boolean), [ isDataValid ]);

  useEffect(() => {
    setIsDataValid(validationFunction(data))
  }, [ data ])

  const setValue = ( id: ProfileDataTypes, value: string | string[] ) => {
    dispatch({
      type: ProfileSettingsFormActions.SET_INPUT_VALUE,
      field: id,
      payload: value,
    });
  };

  const onSubmitClick = () => {
    allFieldsValid && submitData(data)
  }

  return (
    <ProfileSettingsForm
      onSubmitClick={onSubmitClick}
      englishLevelsArray={englishLevelsArray}
      educationLevelsArray={educationLevelsArray}
      skillsArray={skillsArray}
      getSkills={setValue}
      getValue={setValue}
      isValid={isDataValid}
    />
  )
};

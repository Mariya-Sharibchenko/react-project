export interface IFilterOptionsProps {
  label: string,
  value: string,
  isChecked: boolean,
}

export interface IFilterProps {
  id: string,
  filterTitle: string,
  selectAllText: string,
  optionsArray: IFilterOptionsProps[],
}

export interface IStudentDataProps {
  id: number,
  img?: string,
  firstName: string,
  lastName: string,
  position: string,
  age?: number,
  course: string,
  score: number,
  bestStudentMark: boolean
}

export interface IStudentEducationInfoProps {
  formal: {
    level: string,
    detailedInfo: string,
  },
  english: string,
  additional?: string
}

export interface IStudentContactsProps {
  city: string,
  tel: string,
  eMail: string,
  socialMedia?: IStudentSocialMediaProps
}

export interface IStudentSocialMediaProps {
  facebook?: string,
  linkedin?: string,
  instagram?: string,
  vk?: string,
  github?: string,
  bitbucket?: string,
}

export interface IStudentDetailedDataProps extends IStudentDataProps {
  diplomaLink: string,
  schoolRecommendation: string,
  skills: string[],
  education: IStudentEducationInfoProps,
  aboutStudent: string,
  contacts: IStudentContactsProps,
  showContacts: boolean,
}

export interface IInputProps {
  placeholderText: string,
  labelText: string,
  type: 'email' | 'text' | 'password',
  validationFunction: (value: string) => boolean,
}

export interface INotificationsDataProps {
  invitation: number,
  response: number,
  rejection: number,
}

export interface IMenuItemProps {
  pathTo: string,
  icon: string,
  itemText: string,
}

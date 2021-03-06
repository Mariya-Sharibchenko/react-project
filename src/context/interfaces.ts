export interface IFilterOptionsProps {
  label: string,
  value: string,
  isChecked: boolean,
}

export interface IFilterProps {
  id: string,
  filterTitle?: string,
  optionsArray: IFilterOptionsProps[],
}

export interface IMultiFilterProps {
  id: string,
  filterTitle: string,
  selectAllText: string,
  optionsArray: IFilterOptionsProps[],
}

export interface IStudentDataProps {
  __typename?: string,
  id: string,
  img?: string | null | undefined,
  firstName: string,
  lastName: string,
  position: string,
  age?: number | null | undefined,
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
  additional?: string | null | undefined,
}

export interface IStudentContactsProps {
  city: string,
  tel: string,
  eMail: string,
  socialMedia?: IStudentSocialMediaProps | undefined | null
}

export interface IStudentSocialMediaProps {
  facebook?: string | null | undefined,
  linkedin?: string | null | undefined,
  instagram?: string | null | undefined,
  vk?: string | null | undefined,
  github?: string | null | undefined,
  bitbucket?: string | null | undefined,
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

export enum FiltersId {
  age = 'age',
  course = 'course',
  score = 'score',
  english = 'english',
  status = 'status',
  invitation_date = 'invitation_date',
}

export enum InputTypes {
  email = 'email',
  text = 'text',
  password = 'password',
}

export interface IInputProps {
  placeholderText: string,
  labelText: string,
  type: InputTypes,
  validationFunction: (value: string, type: InputTypes) => boolean,
  getInputValue: (value: string, type: InputTypes) => void,
  className?: string
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

export interface ICompanyDataProps {
  id: string,
  name: string,
  contacts: string,
  bookmarkedStudents: string[],
}

export enum ResponseStatus {
  Rejected = 'rejected',
  Accepted = 'accepted',
  Considering = 'considering'
}

export type ResponseStatusType = {
  [key in ResponseStatus]: string
}

export const AllResponseStatus = 'all';

export type AllResponseStatusType = typeof AllResponseStatus;

export enum DateFilter {
  new_first = 'new_first',
  old_first = 'old_first'
}

export type DateFilterType = {
  [key in DateFilter]: string
}

export enum ProfileSettingInputs {
  name = 'name',
  education = 'education',
  birthDate = 'birthDate',
  city = 'city',
  phone = 'phone',
  email = 'email',
  english = 'english',
  additionalEducation = 'additionalEducation',
  skills = 'skills',
  about = 'about',
  currentPassword = 'currentPassword',
  newPassword = 'newPassword',
}

export type ProfileSettingInputTypes = {
  [key in ProfileSettingInputs]: string
}

export enum SocialMedia {
  facebook = 'facebook',
  instagram = 'instagram',
  linkedin = 'linkedin',
  vk = 'vk'
}

export type SocialMediaTypes = {
  [key in SocialMedia]: string
}

export type ProfileDataTypes = ProfileSettingInputs | SocialMedia

export type PasswordDataTypes = ProfileSettingInputs.currentPassword | ProfileSettingInputs.newPassword

export type PasswordDataValidationTypes = {
  [key in PasswordDataTypes]: boolean
}

export type ProfileCVDataTypes = Exclude<ProfileSettingInputs, 'currentPassword' | 'newPassword'> | SocialMedia

export type ProfileDataValidationTypes = {
  [key in ProfileCVDataTypes]: boolean
}

export interface IBaseInvitationDataProps {
  id: string,
  invitationDate: string,
  status: ResponseStatus,
}

export interface IInvitationDataProps extends IBaseInvitationDataProps{
  company: ICompanyDataProps,
}

export interface IResponseDataProps extends IBaseInvitationDataProps{
  student: IStudentDetailedDataProps,
}

export interface IResponseProps extends IBaseInvitationDataProps {
  student: string
}

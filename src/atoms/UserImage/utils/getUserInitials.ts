import { IStudentDataProps, ICompanyDataProps } from 'context';

export const getUserInitials = (user: IStudentDataProps | ICompanyDataProps): string => {
  return 'name' in user ? `${user.name.substring(0, 3)}` : `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
};

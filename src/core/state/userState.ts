import { makeVar } from '@apollo/client';
import { ICompanyDataProps, IStudentDetailedDataProps } from 'context';

export interface IUserState {
  user: IStudentDetailedDataProps | ICompanyDataProps | undefined
}

export const defaultUser: IUserState = {
  user: undefined
};

export const userStateVar = makeVar(defaultUser);

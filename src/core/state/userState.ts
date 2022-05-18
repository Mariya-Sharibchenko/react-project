import { makeVar } from '@apollo/client';
import { ICompanyDataProps, IStudentDetailedDataProps } from 'context';

export interface IUserState {
  company: ICompanyDataProps | undefined
  student: IStudentDetailedDataProps | undefined
}

export const defaultUser: IUserState = {
  company: undefined,
  student: undefined
};

export const userStateVar = makeVar(defaultUser);

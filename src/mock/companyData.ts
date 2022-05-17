import { ICompanyDataProps } from 'context';

export const ArategCompany: ICompanyDataProps = {
  id: '1',
  name: 'Arateg',
  contacts: 'arateg.com',
  bookmarkedStudents: ['2', '3', '4'],
};

export const IBACompany: ICompanyDataProps = {
  id: '2',
  name: 'IBA Group Company',
  contacts: 'ibagroup.com',
  bookmarkedStudents: ['2', '3', '4'],
};

export const iTechArtCompany: ICompanyDataProps = {
  id: '3',
  name: 'iTechArt',
  contacts: 'itechart.com',
  bookmarkedStudents: ['2', '3', '4'],
};

export const SCANDCompany: ICompanyDataProps = {
  id: '4',
  name: 'SCAND',
  contacts: 'scand.com',
  bookmarkedStudents: ['2', '3', '4'],
};

export const ItransitionCompany: ICompanyDataProps = {
  id: '5',
  name: 'Itransition',
  contacts: 'itransition.com',
  bookmarkedStudents: ['2', '3', '4'],
};

export const CompaniesArray: ICompanyDataProps[] = [ArategCompany, IBACompany, iTechArtCompany, SCANDCompany, ItransitionCompany];

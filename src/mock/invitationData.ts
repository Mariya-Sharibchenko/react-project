import { IInvitationDataProps, ResponseStatus } from 'context';
import { ArategCompany, IBACompany, iTechArtCompany, ItransitionCompany, SCANDCompany } from './companyData';

export const InvitationArateg: IInvitationDataProps = {
  id: '1',
  company: ArategCompany,
  invitationDate: '2019-02-19',
  status: ResponseStatus.Accepted,
};

export const InvitationIBA: IInvitationDataProps = {
  id: '2',
  company: IBACompany,
  invitationDate: '2019-12-07',
  status: ResponseStatus.Considering,
};


export const InvitationITechArt: IInvitationDataProps = {
  id: '3',
  company: iTechArtCompany,
  invitationDate: '2019-04-28',
  status: ResponseStatus.Considering,
};


export const InvitationSCAND: IInvitationDataProps = {
  id: '4',
  company: SCANDCompany,
  invitationDate: '2019-03-13',
  status: ResponseStatus.Rejected,
};

export const InvitationItransition: IInvitationDataProps = {
  id: '5',
  company: ItransitionCompany,
  invitationDate: '2019-06-20',
  status: ResponseStatus.Rejected,
};

export const InvitationsArray: IInvitationDataProps[] = [InvitationArateg, InvitationIBA, InvitationItransition, InvitationSCAND, InvitationITechArt];

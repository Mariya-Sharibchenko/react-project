import { IInvitationDataProps, ResponseStatus } from 'context';
import { ArategCompany, IBACompany, iTechArtCompany, ItransitionCompany, SCANDCompany } from './companyData';

export const InvitationArateg: IInvitationDataProps = {
  company: ArategCompany,
  invitationDate: '2019-02-19',
  status: ResponseStatus.accepted,
};

export const InvitationIBA: IInvitationDataProps = {
  company: IBACompany,
  invitationDate: '2019-12-07',
  status: ResponseStatus.considering,
};


export const InvitationITechArt: IInvitationDataProps = {
  company: iTechArtCompany,
  invitationDate: '2019-04-28',
  status: ResponseStatus.considering,
};


export const InvitationSCAND: IInvitationDataProps = {
  company: SCANDCompany,
  invitationDate: '2019-03-13',
  status: ResponseStatus.rejected,
};

export const InvitationItransition: IInvitationDataProps = {
  company: ItransitionCompany,
  invitationDate: '2019-06-20',
  status: ResponseStatus.rejected,
};

export const InvitationsArray: IInvitationDataProps[] = [InvitationArateg, InvitationIBA, InvitationItransition, InvitationSCAND, InvitationITechArt];

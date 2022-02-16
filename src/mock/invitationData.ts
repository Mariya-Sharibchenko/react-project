import { IInvitationDataProps, ResponseStatus } from 'context';
import { ArategCompany, IBACompany, iTechArtCompany, ItransitionCompany, SCANDCompany } from './companyData';

export const InvitationArateg: IInvitationDataProps = {
  company: ArategCompany,
  invitationDate: '19 февраля 2019',
  status: ResponseStatus.accepted,
};

export const InvitationIBA: IInvitationDataProps = {
  company: IBACompany,
  invitationDate: '7 февраля 2019',
  status: ResponseStatus.considering,
};


export const InvitationITechArt: IInvitationDataProps = {
  company: iTechArtCompany,
  invitationDate: '28 апреля 2019',
  status: ResponseStatus.considering,
};


export const InvitationSCAND: IInvitationDataProps = {
  company: SCANDCompany,
  invitationDate: '13 марта 2019',
  status: ResponseStatus.rejected,
};

export const InvitationItransition: IInvitationDataProps = {
  company: ItransitionCompany,
  invitationDate: '20 июня 2019',
  status: ResponseStatus.rejected,
};

export const InvitationsArray: IInvitationDataProps[] = [InvitationArateg, InvitationIBA, InvitationItransition, InvitationSCAND, InvitationITechArt];

import { DateFilter, IInvitationDataProps } from 'context';

export const sortInvitations = (invitationsList: IInvitationDataProps[], sortOption: DateFilter): IInvitationDataProps[] => {
  invitationsList.sort();
  return invitationsList;
};

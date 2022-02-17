import { DateFilter, IInvitationDataProps } from 'context';

export const sortInvitations = (invitationsList: IInvitationDataProps[], sortOption: DateFilter): IInvitationDataProps[] => {
  invitationsList.sort((first, second) => {
    return sortOption === DateFilter.new_first
           ? new Date(first.invitationDate).getTime() - new Date(second.invitationDate).getTime()
           : new Date(second.invitationDate).getTime() - new Date(first.invitationDate).getTime();
  });
  return invitationsList;
};

import { DateFilter, IBaseInvitationDataProps } from 'context';

export const sortByInvitationDate = <ArrayType extends IBaseInvitationDataProps>(array: ArrayType[], sortOption: DateFilter): ArrayType[] => {
  array.sort((first, second) => {
    return sortOption === DateFilter.new_first
           ? new Date(first.invitationDate).getTime() - new Date(second.invitationDate).getTime()
           : new Date(second.invitationDate).getTime() - new Date(first.invitationDate).getTime();
  });
  return array;
};

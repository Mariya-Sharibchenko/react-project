import { DateFilter, IResponseDataProps } from 'context';

export const sortResponses = (responsesList: IResponseDataProps[], sortOption: DateFilter): IResponseDataProps[] => {
  responsesList.sort((first, second) => {
    return sortOption === DateFilter.new_first
           ? new Date(first.invitationDate).getTime() - new Date(second.invitationDate).getTime()
           : new Date(second.invitationDate).getTime() - new Date(first.invitationDate).getTime();
  });
  return responsesList;
};

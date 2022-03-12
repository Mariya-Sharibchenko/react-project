import React, { useCallback, useMemo, useState } from 'react';

import { InvitationsList } from './InvitationsList';
import { sortByInvitationDate } from 'utils/sortByInvitationDate';
import {
  AllResponseStatusType,
  DateFilter,
  IFilterProps,
  IInvitationDataProps,
  ResponseStatus
} from 'context';

interface IInvitationsListContainerProps {
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  invitationsArray: IInvitationDataProps[],
  onInvitationStatusClick: () => void,
}

export const InvitationsListContainer: React.FC<IInvitationsListContainerProps> = ({
  filterByStatus,
  filterByDate,
  invitationsArray,
  onInvitationStatusClick
}) => {
  const firstStatusValue = filterByStatus.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
  const firstDateValue = filterByDate.optionsArray.find(option => option.isChecked)?.value as DateFilter;

  const [ invitationsList, setInvitationsList ] = useState<IInvitationDataProps[]>(invitationsArray);
  const [ selectedStatusValue, setFilteredStatusValue ] = useState<AllResponseStatusType | ResponseStatus>(firstStatusValue);
  const [ selectedDateValue, setFilteredDateValue ] = useState<DateFilter>(firstDateValue);

  const sortedInvitationsList = useMemo(() =>
    sortByInvitationDate<IInvitationDataProps>(invitationsList, selectedDateValue), [invitationsList, selectedDateValue]
  );

  const setFilterStatus = useCallback((filterData: IFilterProps) => {
    const statusValue = filterData.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
    setFilteredStatusValue(statusValue);
  }, []);

  const setFilterDate = useCallback((filterData: IFilterProps) => {
    const dateValue = filterData.optionsArray.find(option => option.isChecked)?.value as DateFilter;
    setFilteredDateValue(dateValue);
  }, []);

  const onAcceptInvitationClick = useCallback((companyId: number) => {
    setInvitationsList(prevState => prevState.map((invitation) => {
      return invitation.company.id === companyId
             ? {...invitation, status: ResponseStatus.accepted}
             : invitation;
    }));
  }, []);

  const onRejectInvitationClick = useCallback((companyId: number) => {
    setInvitationsList(prevState => prevState.map((invitation) =>
      invitation.company.id === companyId
      ? {...invitation, status: ResponseStatus.rejected}
      : invitation
    ));
  }, []);

  const onDeleteInvitationClick = useCallback((companyId: number) => {
    setInvitationsList(prevState => prevState.filter((invitation) =>
      invitation.company.id !== companyId
    ));
  }, []);

  const onDeleteAllInvitationsClick = useCallback(() => setInvitationsList([]), []);

  return (
    <InvitationsList
      filterByDate={filterByDate}
      filterByStatus={filterByStatus}
      invitationsList={sortedInvitationsList}
      onStatusCheckboxClick={onInvitationStatusClick}
      selectedStatus={selectedStatusValue}
      onAcceptClick={onAcceptInvitationClick}
      onRejectClick={onRejectInvitationClick}
      onDeleteClick={onDeleteInvitationClick}
      onDeleteAllInvitationsClick={onDeleteAllInvitationsClick}
      setFilterStatusOption={setFilterStatus}
      setFilterDateOption={setFilterDate}
    />
  );
};

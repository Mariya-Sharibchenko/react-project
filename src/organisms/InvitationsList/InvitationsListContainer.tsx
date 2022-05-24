import React, { useCallback, useMemo, useState } from 'react';

import { InvitationsList } from './InvitationsList';
import { sortByInvitationDate } from 'utils/sortByInvitationDate';
import { AllResponseStatusType, DateFilter, IFilterProps, IInvitationDataProps, ResponseStatus } from 'context';
import { useInvitations, useUpdateInvitation } from 'core/hooks';
import { userStateVar } from 'core/state';

interface IInvitationsListContainerProps {
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  onInvitationStatusClick: () => void,
}

export const InvitationsListContainer: React.FC<IInvitationsListContainerProps> = ({
  filterByStatus,
  filterByDate,
  onInvitationStatusClick
}) => {
  const invitations = useInvitations(userStateVar().student!);

  const firstStatusValue = filterByStatus.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
  const firstDateValue = filterByDate.optionsArray.find(option => option.isChecked)?.value as DateFilter;

  const [ selectedStatusValue, setFilteredStatusValue ] = useState<AllResponseStatusType | ResponseStatus>(firstStatusValue);
  const [ selectedDateValue, setFilteredDateValue ] = useState<DateFilter>(firstDateValue);

  const [ onChangeInvitationStatusClick ] = useUpdateInvitation();

  const sortedInvitationsList = useMemo(() =>
    sortByInvitationDate<IInvitationDataProps>(invitations, selectedDateValue), [invitations, selectedDateValue]
  );

  const setFilterStatus = useCallback((filterData: IFilterProps) => {
    const statusValue = filterData.optionsArray.find(option => option.isChecked)?.value as AllResponseStatusType | ResponseStatus;
    setFilteredStatusValue(statusValue);
  }, []);

  const setFilterDate = useCallback((filterData: IFilterProps) => {
    const dateValue = filterData.optionsArray.find(option => option.isChecked)?.value as DateFilter;
    setFilteredDateValue(dateValue);
  }, []);

  const onAcceptInvitationClick = useCallback(async (companyId: string) => {
    onChangeInvitationStatusClick(invitations, companyId, ResponseStatus.Accepted);
  }, [ invitations ]);

  const onRejectInvitationClick = useCallback(async (companyId: string) => {
    onChangeInvitationStatusClick(invitations, companyId, ResponseStatus.Rejected);
  }, [ invitations ]);

  const onDeleteInvitationClick = useCallback((companyId: string) => {
    // setInvitationsList(prevState => prevState.filter((invitation) =>
    //   invitation.company.id !== companyId
    // ));
  }, []);

  const onDeleteAllInvitationsClick = useCallback(() => {
    // setInvitationsList([]);
  }, []);

  return (
    <>
      { invitations.length &&
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
      }
    </>
  );
};

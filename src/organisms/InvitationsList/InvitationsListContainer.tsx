import React, { useMemo, useState } from 'react';

import { InvitationsList } from './InvitationsList';
import { sortInvitations } from './utils/sortInvitations';
import { AllResponseStatusType, IFilterProps, IInvitationDataProps, ResponseStatus } from 'context';

interface IInvitationsListContainerProps {
  invitationsArray: IInvitationDataProps[],
  onInvitationStatusClick: () => void,
}

export const InvitationsListContainer: React.FC<IInvitationsListContainerProps> = ({
  invitationsArray,
  onInvitationStatusClick
}) => {
  const [ invitationsList, setInvitationsList ] = useState<IInvitationDataProps[]>(invitationsArray);
  const [ filteredStatusValue, setFilteredStatusValue ] = useState<ResponseStatus | AllResponseStatusType>('all');
  const [ filteredDateValue, setFilteredDateValue ] = useState<string>('new first');

  const sortedInvitationsList = useMemo(() =>
    sortInvitations(invitationsList, filteredDateValue), [invitationsList, filteredDateValue]
  );

  const setFilterStatus = (options: IFilterProps) => {
    setFilteredStatusValue(prevState => prevState);
  };

  const setFilterDate = () => {
    setFilteredDateValue(prevState => prevState);
  };

  const onAcceptInvitationClick = (companyId: number) => {
    setInvitationsList(prevState => prevState.map((invitation) =>
      invitation.company.id === companyId
      ? {...invitation, status: ResponseStatus.accepted}
      : invitation
    ));
  };

  const onRejectInvitationClick = (companyId: number) => {
    setInvitationsList(prevState => prevState.map((invitation) =>
      invitation.company.id === companyId
      ? {...invitation, status: ResponseStatus.rejected}
      : invitation
    ));
  };

  const onDeleteInvitationClick = (companyId: number) => {
    setInvitationsList(prevState => prevState.filter((invitation) =>
      invitation.company.id !== companyId
    ));
  };

  const onDeleteAllInvitationsClick = () => {
    setInvitationsList([]);
  };

  return (
    <InvitationsList
      invitationsList={invitationsList}
      onStatusCheckboxClick={onInvitationStatusClick}
      filteredStatus={filteredStatusValue}
      onAcceptClick={onAcceptInvitationClick}
      onRejectClick={onRejectInvitationClick}
      onDeleteClick={onDeleteInvitationClick}
      onDeleteAllInvitationsClick={onDeleteAllInvitationsClick}
      setFilterStatusOption={setFilterStatus}
      setFilterDateOption={setFilterDate}
    />
  );
};

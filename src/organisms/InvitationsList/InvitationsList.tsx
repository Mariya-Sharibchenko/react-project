import React from 'react';

import {
  InvitationsListHeader,
  InvitationsListWrapper,
  InvitationsArrayWrapper,
  InvitationCardWrapper
} from './styled';
import { AllResponseStatus, AllResponseStatusType, IFilterProps, IInvitationDataProps, ResponseStatus } from 'context';
import { InvitationCard, InvitationsHeader } from 'molecules';

export interface IInvitationsListProps {
  invitationsList: IInvitationDataProps[],
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  selectedStatus: ResponseStatus | AllResponseStatusType,
  onAcceptClick: (companyId: number) => void,
  onRejectClick: (companyId: number) => void,
  onDeleteClick: (companyId: number) => void,
  onDeleteAllInvitationsClick: () => void,
  setFilterStatusOption: (options: IFilterProps) => void,
  setFilterDateOption: (options: IFilterProps) => void,
}

export const InvitationsList: React.FC<IInvitationsListProps> = ({
  invitationsList,
  onStatusCheckboxClick,
  filterByStatus,
  filterByDate,
  selectedStatus,
  onAcceptClick,
  onRejectClick,
  onDeleteClick,
  onDeleteAllInvitationsClick,
  setFilterDateOption,
  setFilterStatusOption
}) => {
  return (
    <InvitationsListWrapper>
      <InvitationsListHeader>
        <InvitationsHeader
          filterStatusData={filterByStatus}
          setFilterStatusOption={setFilterStatusOption}
          filterDateData={filterByDate}
          setFilterDateOption={setFilterDateOption}
          onDeleteAllInvitationsClick={onDeleteAllInvitationsClick}
        />
      </InvitationsListHeader>

      <InvitationsArrayWrapper>
        {invitationsList.map((invitation) =>
          <InvitationCardWrapper key={invitation.company.id}>
            <InvitationCard
              invitation={invitation}
              onStatusCheckboxClick={onStatusCheckboxClick}
              isStatusChecked={selectedStatus === AllResponseStatus || invitation.status === selectedStatus}
              onAcceptClick={onAcceptClick}
              onRejectClick={onRejectClick}
              onDeleteClick={onDeleteClick}
            />
          </InvitationCardWrapper>
        )}
      </InvitationsArrayWrapper>
    </InvitationsListWrapper>
  );
};

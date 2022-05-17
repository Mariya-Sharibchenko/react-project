import React from 'react';

import {
  InvitationsListHeader,
  InvitationsListWrapper,
  InvitationsArrayWrapper,
  InvitationCardWrapper
} from './styled';
import {
  AllResponseStatus,
  AllResponseStatusType,
  IFilterProps,
  IInvitationDataProps,
  InvitationsHeaderText,
  ResponseStatus
} from 'context';
import { InvitationCard, InvitationsResponsesHeader } from 'molecules';

export interface IInvitationsListProps {
  invitationsList: IInvitationDataProps[],
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  filterByStatus: IFilterProps,
  filterByDate: IFilterProps,
  selectedStatus: ResponseStatus | AllResponseStatusType,
  onAcceptClick: (companyId: string) => void,
  onRejectClick: (companyId: string) => void,
  onDeleteClick: (companyId: string) => void,
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
        <InvitationsResponsesHeader
          filterStatusData={filterByStatus}
          setFilterStatusOption={setFilterStatusOption}
          filterDateData={filterByDate}
          setFilterDateOption={setFilterDateOption}
          onDeleteAllClick={onDeleteAllInvitationsClick}
          senderColumnTitle={InvitationsHeaderText.company}
          actionColumnTitle={InvitationsHeaderText.action}
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

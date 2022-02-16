import React from 'react';

import {
  InvitationsListHeader,
  InvitationsListWrapper,
  InvitationsArrayWrapper,
  InvitationCardWrapper
} from './styled';
import { AllResponseStatus, AllResponseStatusType, IFilterProps, IInvitationDataProps, ResponseStatus } from 'context';
import { InvitationCard, InvitationsHeader } from 'molecules';
import { FilterByDate, FilterByStatus } from 'mock';

export interface IInvitationsListProps {
  invitationsList: IInvitationDataProps[],
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  filteredStatus: ResponseStatus | AllResponseStatusType,
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
  filteredStatus,
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
          filterStatusData={FilterByStatus}
          setFilterStatusOption={setFilterStatusOption}
          filterDateData={FilterByDate}
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
              isStatusChecked={filteredStatus === AllResponseStatus || invitation.status === filteredStatus}
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

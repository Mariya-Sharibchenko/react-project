import React from 'react';

import { InvitationsListHeader, InvitationsListWrapper, InvitationsArrayWrapper } from './styled';
import { IFilterProps, IInvitationDataProps } from 'context';
import { InvitationCard } from 'molecules';
import { InvitationsHeader } from '../../molecules/InvitationsHeader';
import { FilterByDate, FilterByStatus } from 'mock';

export interface IInvitationsListProps {
  invitationsList: IInvitationDataProps[],
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  onAcceptClick: () => void,
  onRejectClick: () => void,
  onDeleteClick: () => void,
  onDeleteAllInvitationsClick: () => void,
  setFilterStatusOption: (options: IFilterProps) => void,
  setFilterDateOption: (options: IFilterProps) => void,
}

export const InvitationsList: React.FC<IInvitationsListProps> = ({
  invitationsList,
  onStatusCheckboxClick,
  isStatusChecked,
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
          <InvitationCard
            key={invitation.company.id}
            invitation={invitation}
            onStatusCheckboxClick={onStatusCheckboxClick}
            isStatusChecked={isStatusChecked}
            onAcceptClick={onAcceptClick}
            onRejectClick={onRejectClick}
            onDeleteClick={onDeleteClick}
          />
        )}
      </InvitationsArrayWrapper>
    </InvitationsListWrapper>
  );
};

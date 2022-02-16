import React, { useMemo } from 'react';

import { DeleteButton } from 'atoms';

import {
  IInvitationDataProps,
  InvitationCardActionsButtons,
  InvitationStatusLabels,
  ResponseStatus,
} from 'context';

import {
  StyledInvitationCard,
  InvitationDate,
  StatusCheckbox,
  CompanyInfoWrapper,
  CompanyName,
  CompanyContacts,
  ButtonsWrapper, AcceptButton, RejectButton,
} from './styled';

export interface IInvitationCardProps {
  invitation: IInvitationDataProps,
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  onAcceptClick: () => void,
  onRejectClick: () => void,
  onDeleteClick: () => void,
}

export const InvitationCard: React.FC<IInvitationCardProps> = ({
  invitation,
  onStatusCheckboxClick,
  isStatusChecked,
  onAcceptClick,
  onRejectClick,
  onDeleteClick
}) => {
  const { company, invitationDate, status } = invitation;
  const { name, contacts } = company;
  const statusLabel = useMemo(() => InvitationStatusLabels[status], [status]);

  return (
    <StyledInvitationCard>
      <StatusCheckbox value={statusLabel} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked} />

      <CompanyInfoWrapper>
        <CompanyName>{name}</CompanyName>
        <CompanyContacts>{contacts}</CompanyContacts>
      </CompanyInfoWrapper>

      <ButtonsWrapper>
        <AcceptButton onClick={onAcceptClick} text={InvitationCardActionsButtons.AcceptButtonText} status={status} />

        <RejectButton onClick={onRejectClick} text={InvitationCardActionsButtons.RejectButtonText} status={status} />
      </ButtonsWrapper>

      <InvitationDate>{invitationDate}</InvitationDate>

      <DeleteButton onClick={onDeleteClick} />
    </StyledInvitationCard>
  );
};

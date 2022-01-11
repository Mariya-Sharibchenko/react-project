import React, { useMemo } from 'react';

import { DeleteButton } from 'atoms/Buttons';

import {
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
  status: ResponseStatus,
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  company: {name: string, contacts: string}
  invitationDate: string,
  onAcceptClick: () => void,
  onRejectClick: () => void,
  onDeleteClick: () => void,
}

export const InvitationCard: React.FC<IInvitationCardProps> = ({
  status,
  onStatusCheckboxClick,
  isStatusChecked,
  company,
  invitationDate,
  onAcceptClick,
  onRejectClick,
  onDeleteClick
}) => {
  const {name, contacts} = company;
  const statusLabel = useMemo(() => InvitationStatusLabels[status], [status]);

  return (
    <StyledInvitationCard>
      <StatusCheckbox value={statusLabel} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked}/>

      <CompanyInfoWrapper>
        <CompanyName>{name}</CompanyName>
        <CompanyContacts>{contacts}</CompanyContacts>
      </CompanyInfoWrapper>

      <ButtonsWrapper>
        <AcceptButton onClick={onAcceptClick} text={InvitationCardActionsButtons.accept} status={status} />

        <RejectButton onClick={onRejectClick} text={InvitationCardActionsButtons.reject} status={status} />
      </ButtonsWrapper>

      <InvitationDate>{invitationDate}</InvitationDate>

      <DeleteButton onClick={onDeleteClick} />
    </StyledInvitationCard>
  )
};

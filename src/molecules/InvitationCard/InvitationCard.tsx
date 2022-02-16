import React, { useCallback, useMemo } from 'react';

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
  onAcceptClick: (companyId: number) => void,
  onRejectClick: (companyId: number) => void,
  onDeleteClick: (companyId: number) => void,
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
  const statusLabel = useMemo(() => InvitationStatusLabels[status], [status]);

  const onAcceptBtnClick = useCallback(() => onAcceptClick(company.id), []);
  const onRejectBtnClick = useCallback(() => onRejectClick(company.id), []);
  const onDeleteBtnClick = useCallback(() => onDeleteClick(company.id), []);

  return (
    <StyledInvitationCard>
      <StatusCheckbox value={statusLabel} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked} />

      <CompanyInfoWrapper>
        <CompanyName>{company.name}</CompanyName>
        <CompanyContacts>{company.contacts}</CompanyContacts>
      </CompanyInfoWrapper>

      <ButtonsWrapper>
        <AcceptButton onClick={onAcceptBtnClick} text={InvitationCardActionsButtons.AcceptButtonText} status={status} />

        <RejectButton onClick={onRejectBtnClick} text={InvitationCardActionsButtons.RejectButtonText} status={status} />
      </ButtonsWrapper>

      <InvitationDate>{invitationDate}</InvitationDate>

      <DeleteButton onClick={onDeleteBtnClick} />
    </StyledInvitationCard>
  );
};

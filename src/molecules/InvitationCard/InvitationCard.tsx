import React, { useCallback, useMemo } from 'react';

import { DeleteButton } from 'atoms';
import {
  IInvitationDataProps,
  InvitationCardActionsButtons,
  InvitationStatusLabels, WindowSize,
} from 'context';
import {
  StyledInvitationCard,
  InvitationDate,
  StatusCheckbox,
  MobileCardWrapper,
  CompanyInfoWrapper,
  CompanyName,
  CompanyContacts,
  ButtonsWrapper,
  AcceptButton,
  RejectButton,
} from './styled';
import { getFullDateString } from 'utils/getFullDateString';
import { useWindowSize } from 'utils/getWindowSize';

const { tablet, laptop } = WindowSize;

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
  const windowSize = useWindowSize();

  const { company, invitationDate, status } = invitation;
  const statusLabel = useMemo(() => InvitationStatusLabels[status], [status]);

  const onAcceptBtnClick = useCallback(() => onAcceptClick(company.id), [invitation]);
  const onRejectBtnClick = useCallback(() => onRejectClick(company.id), [invitation]);
  const onDeleteBtnClick = useCallback(() => onDeleteClick(company.id), [invitation]);

  return (
    <StyledInvitationCard>
      { windowSize && windowSize.width < tablet ?
        <>
          <MobileCardWrapper>
            <StatusCheckbox
              value={statusLabel}
              isValueHidden={windowSize && windowSize.width < laptop}
              onCheckboxSelect={onStatusCheckboxClick}
              isChecked={isStatusChecked}
            />

            <CompanyInfoWrapper>
              <CompanyName>{company.name}</CompanyName>
              <CompanyContacts>{company.contacts}</CompanyContacts>
            </CompanyInfoWrapper>

            <DeleteButton onClick={onDeleteBtnClick} />
          </MobileCardWrapper>

          <ButtonsWrapper>
            <AcceptButton
              onClick={onAcceptBtnClick}
              text={InvitationCardActionsButtons.AcceptButtonText}
              status={status}
            />

            <RejectButton
              onClick={onRejectBtnClick}
              text={InvitationCardActionsButtons.RejectButtonText}
              status={status}
            />
          </ButtonsWrapper>
        </> :
        <>
          <StatusCheckbox
            value={statusLabel}
            isValueHidden={windowSize && windowSize.width < laptop}
            onCheckboxSelect={onStatusCheckboxClick}
            isChecked={isStatusChecked}
          />

          <CompanyInfoWrapper>
            <CompanyName>{company.name}</CompanyName>
            <CompanyContacts>{company.contacts}</CompanyContacts>
          </CompanyInfoWrapper>

          <ButtonsWrapper>
            <AcceptButton
              onClick={onAcceptBtnClick}
              text={InvitationCardActionsButtons.AcceptButtonText}
              status={status}
            />

            <RejectButton
              onClick={onRejectBtnClick}
              text={InvitationCardActionsButtons.RejectButtonText}
              status={status}
            />
          </ButtonsWrapper>

          <InvitationDate>{getFullDateString(invitationDate)}</InvitationDate>

          <DeleteButton onClick={onDeleteBtnClick} />
        </>
      }
    </StyledInvitationCard>
  );
};

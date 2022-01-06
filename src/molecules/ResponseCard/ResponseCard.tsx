import React, { useMemo } from 'react';

import { DeleteButton } from 'atoms/Buttons';
import { StudentImageInCircle } from 'atoms/StudentImages';

import {
  InvitationIsOnConsideringText,
  InvitationWasRejectedText,
  IStudentDetailedDataProps,
  ResponseStatus, ResponseStatusLabels,
} from 'context';

import {
  CommunicationWay,
  InvitationDate,
  StatusCheckbox,
  StudentInfoWrapper,
  StyledResponseCard,
  StyledStudentData,
} from './styled';

export interface IResponseCardProps {
  status: ResponseStatus,
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  student: IStudentDetailedDataProps,
  invitationDate: string,
  onDeleteClick: () => void,
}

export const ResponseCard: React.FC<IResponseCardProps> = ({
  status,
  onStatusCheckboxClick,
  isStatusChecked,
  invitationDate,
  student,
  onDeleteClick
}) => {
  const { img, firstName, lastName, contacts } = student;

  const communicationWay = useMemo(() => {
    switch (status) {
      case ResponseStatus.rejected:
        return InvitationWasRejectedText;
      case ResponseStatus.considering:
        return InvitationIsOnConsideringText;
      default:
        return contacts.tel;
    }
  }, [status]);

  const statusLabel = useMemo(() => ResponseStatusLabels[status], [status]);

  return (
    <StyledResponseCard>
      <StatusCheckbox value={statusLabel} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked}/>

      <StudentInfoWrapper>
        <StudentImageInCircle
          userPicture={img}
          lastName={lastName}
          firstName={firstName}
        />

        <StyledStudentData student={student} />
      </StudentInfoWrapper>

      <CommunicationWay>{communicationWay}</CommunicationWay>

      <InvitationDate>{invitationDate}</InvitationDate>

      <DeleteButton onClick={onDeleteClick} />
    </StyledResponseCard>
  )
};

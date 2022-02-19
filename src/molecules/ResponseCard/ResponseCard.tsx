import React, { useMemo } from 'react';

import { DeleteButton, StudentImageInCircle } from 'atoms';
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
import { getFullDateString } from 'utils/getFullDateString';

export interface IResponseCardProps {
  status: ResponseStatus,
  onStatusCheckboxClick: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isStatusChecked: boolean,
  student: IStudentDetailedDataProps,
  invitationDate: string,
  onDeleteClick: (studentId: number) => void,
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

  const onDeleteBtnClick = () => onDeleteClick(student.id);

  return (
    <StyledResponseCard>
      <StatusCheckbox value={statusLabel} onCheckboxSelect={onStatusCheckboxClick} isChecked={isStatusChecked} />

      <StudentInfoWrapper>
        <StudentImageInCircle
          userPicture={img}
          lastName={lastName}
          firstName={firstName}
        />

        <StyledStudentData student={student} />
      </StudentInfoWrapper>

      <CommunicationWay>{communicationWay}</CommunicationWay>

      <InvitationDate>{getFullDateString(invitationDate)}</InvitationDate>

      <DeleteButton onClick={onDeleteBtnClick} />
    </StyledResponseCard>
  );
};

import React, { useCallback, useMemo } from 'react';

import { DeleteButton, StudentImageInCircle } from 'atoms';
import {
  InvitationIsOnConsideringText,
  InvitationWasRejectedText,
  IStudentDetailedDataProps,
  ResponseStatus,
  ResponseStatusLabels,
  WindowSize,
} from 'context';
import {
  CommunicationWay,
  InvitationDate,
  StatusCheckbox,
  StudentInfoWrapper,
  StyledResponseCard,
  StyledStudentData,
  MobileResponseWrapper,
  StyledStudentImg
} from './styled';
import { getFullDateString } from 'utils/getFullDateString';
import { useWindowSize } from 'utils/getWindowSize';

const { tablet, laptop } = WindowSize;

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
  const windowSize = useWindowSize();

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

  const onDeleteBtnClick = useCallback(() => onDeleteClick(student.id), [student]);

  return (
    <StyledResponseCard>
      <StatusCheckbox
        value={statusLabel}
        isValueHidden={windowSize && windowSize.width < laptop}
        onCheckboxSelect={onStatusCheckboxClick}
        isChecked={isStatusChecked}
      />

      { windowSize && windowSize.width < tablet ?
        <MobileResponseWrapper>
          <StudentInfoWrapper>
            <StyledStudentImg
              userPicture={img}
              lastName={lastName}
              firstName={firstName}
            />

            <StyledStudentData student={student} />
          </StudentInfoWrapper>

          <CommunicationWay>{communicationWay}</CommunicationWay>
        </MobileResponseWrapper> :
        <>
          <StudentInfoWrapper>
            <StudentImageInCircle
              userPicture={img}
              lastName={lastName}
              firstName={firstName}
            />

            <StyledStudentData student={student} />
          </StudentInfoWrapper>

          <CommunicationWay>{communicationWay}</CommunicationWay>
        </>
      }

      <InvitationDate>{getFullDateString(invitationDate)}</InvitationDate>

      <DeleteButton onClick={onDeleteBtnClick} />
    </StyledResponseCard>
  );
};

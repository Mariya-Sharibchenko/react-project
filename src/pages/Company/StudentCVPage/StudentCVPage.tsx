import React from 'react';

import { IStudentCVProps, StudentCV } from 'molecules/StudentCV/StudentCV';
import { useParams } from 'react-router-dom';

export const StudentCVPage: React.FC<IStudentCVProps> = ({
  student,
  isMarked,
  onAddToBookmarkClick,
  onSendInvitationClick
}) => {
  const {studentId} = useParams();
  return (
    <>
      <p style={{padding: '100px'}}>test {studentId}</p>
      <StudentCV
        student={student}
        isMarked={isMarked}
        onAddToBookmarkClick={onAddToBookmarkClick}
        onSendInvitationClick={onSendInvitationClick}
      />
    </>
  );
};

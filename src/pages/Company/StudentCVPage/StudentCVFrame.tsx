import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { StudentCV } from 'molecules';
import { IStudentCVProps } from 'molecules/StudentCV/StudentCV';

export const StudentCVFrame: React.FC = () => {
  const { isMarked, student, onAddToBookmarkClick, onSendInvitationClick } = useOutletContext<IStudentCVProps>();

  return (
    <>
      <StudentCV
        student={student}
        isMarked={isMarked}
        onAddToBookmarkClick={onAddToBookmarkClick}
        onSendInvitationClick={onSendInvitationClick}
      />
    </>
  );
};

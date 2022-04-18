import React from 'react';

import { StudentCV } from 'molecules';
import { useStudentCVData } from 'organisms/StudentList/StudentList';

export const StudentCVPage: React.FC = () => {
  const { isMarked, student, onAddToBookmarkClick, onSendInvitationClick } = useStudentCVData();

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

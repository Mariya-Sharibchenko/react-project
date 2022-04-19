import React from 'react';

import { IStudentCVProps, StudentCV } from 'molecules/StudentCV/StudentCV';
import { Content } from 'templates/default';

export const StudentCVPage: React.FC<IStudentCVProps> = ({
  student,
  isMarked,
  onAddToBookmarkClick,
  onSendInvitationClick
}) => {
  return (
    <>
      <div style={{padding: '100px'}}>test</div>

      <Content>
        <StudentCV
          student={student}
          isMarked={isMarked}
          onAddToBookmarkClick={onAddToBookmarkClick}
          onSendInvitationClick={onSendInvitationClick}
        />
      </Content>
    </>
  );
};

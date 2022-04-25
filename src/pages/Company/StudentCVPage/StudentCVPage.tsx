import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IStudentCVProps, StudentCV } from 'molecules/StudentCV/StudentCV';
import { StudentCVPageHeader, BackToAllCVButton, Content } from './styled';
import { BookmarkButton } from 'atoms';
import { BackToAllCVButtonText } from 'context';

export const StudentCVPage: React.FC<IStudentCVProps> = ({
  student,
  isMarked,
  onAddToBookmarkClick,
  onSendInvitationClick
}) => {
  const navigate = useNavigate();

  return (
    <>
      <StudentCVPageHeader>
        <BackToAllCVButton onClick={() => navigate(-1)}>{BackToAllCVButtonText}</BackToAllCVButton>

        <BookmarkButton isMarked={isMarked} />
      </StudentCVPageHeader>

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

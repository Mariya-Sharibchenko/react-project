import React from 'react';
import { useNavigate } from 'react-router-dom';

import { StudentCV } from 'molecules/StudentCV/StudentCV';
import { StudentCVPageHeader, BackToAllCVButton, Content } from './styled';
import { BookmarkButton } from 'atoms';
import { BackToAllCVButtonText, IStudentDetailedDataProps } from 'context';
import { useCreateInvitation, useChangeBookmarks } from 'core/hooks';

interface IStudentCVPageProps {
  student: IStudentDetailedDataProps,
}

export const StudentCVPage: React.FC<IStudentCVPageProps> = ({
  student,
}) => {
  const navigate = useNavigate();

  const [ onAddToBookmarks, isInBookmarks ] = useChangeBookmarks(student.id);
  const [ onSendInvitation, isInvitationSent] = useCreateInvitation(student);

  return (
    <>
      <StudentCVPageHeader>
        <BackToAllCVButton onClick={() => navigate(-1)}>{BackToAllCVButtonText}</BackToAllCVButton>

        <BookmarkButton isMarked={isInBookmarks} onClick={onAddToBookmarks} />
      </StudentCVPageHeader>

      <Content>
        <StudentCV
          student={student}
          isMarked={isInBookmarks}
          onAddToBookmarkClick={onAddToBookmarks}
          onSendInvitationClick={onSendInvitation}
          isInvitationSent={isInvitationSent}
        />
      </Content>
    </>
  );
};

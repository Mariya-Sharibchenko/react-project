import React from 'react';
import { Link } from 'react-router-dom';

import { IStudentCVProps, StudentCV } from 'molecules/StudentCV/StudentCV';
import { Content } from 'templates/default';
import { StudentCVPageHeader, BackToAllCVButton } from './styled';
import { BookmarkButton } from 'atoms';
import { BackToAllCVButtonText, CompanyMenuItems } from 'context';

export const StudentCVPage: React.FC<IStudentCVProps> = ({
  student,
  isMarked,
  onAddToBookmarkClick,
  onSendInvitationClick
}) => {
  return (
    <>
      <StudentCVPageHeader>
        <Link to={`/${CompanyMenuItems[0].pathTo}`}>
          <BackToAllCVButton>{BackToAllCVButtonText}</BackToAllCVButton>
        </Link>

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

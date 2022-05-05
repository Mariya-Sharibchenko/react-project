import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StudentCV } from 'molecules/StudentCV/StudentCV';
import { StudentCVPageHeader, BackToAllCVButton, Content } from './styled';
import { BookmarkButton } from 'atoms';
import { BackToAllCVButtonText, IStudentDetailedDataProps } from 'context';
import { useSendInvitation, useAddToBookmarks, useUpdateUserData } from 'core';

interface IStudentCVPageProps {
  student: IStudentDetailedDataProps,
  isMarked: boolean,
}

export const StudentCVPage: React.FC<IStudentCVPageProps> = ({
  student,
  isMarked,
}) => {
  const navigate = useNavigate();

  const [ isInvitationSent, setIsInvitationSent ] = useState<boolean>(false);
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(false);

  useEffect(() => {
    setIsInBookmarks(isMarked);
  }, [isMarked]);

  const [ updateUser ] = useUpdateUserData(student.id, {
    name: 'mariSh',
    username: 'mari',
    email: 'mari@test.com'
  });

  const onAddToBookmarkClick = () => updateUser();
  // const onAddToBookmarkClick = useCallback(async () => {
    // const result = await useAddToBookmarks(isInBookmarks, student.id);
    // setIsInBookmarks(result);

  // }, [student, isInBookmarks]);

  const onSendInvitationClick = useCallback(async () => {
    if (!isInvitationSent) {
      const result = await useSendInvitation(student.id);
      setIsInvitationSent(result);
    }
  }, [student]);

  return (
    <>
      <StudentCVPageHeader>
        <BackToAllCVButton onClick={() => navigate(-1)}>{BackToAllCVButtonText}</BackToAllCVButton>

        <BookmarkButton isMarked={isInBookmarks} onClick={onAddToBookmarkClick} />
      </StudentCVPageHeader>

      <Content>
        <StudentCV
          student={student}
          isMarked={isInBookmarks}
          onAddToBookmarkClick={onAddToBookmarkClick}
          onSendInvitationClick={onSendInvitationClick}
          isInvitationSent={isInvitationSent}
        />
      </Content>
    </>
  );
};

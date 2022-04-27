import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StudentCV } from 'molecules/StudentCV/StudentCV';
import { StudentCVPageHeader, BackToAllCVButton, Content } from './styled';
import { BookmarkButton } from 'atoms';
import { BackToAllCVButtonText, IStudentDetailedDataProps } from 'context';

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
  const [ isInBookmarks, setIsInBookmarks ] = useState<boolean>(isMarked);

  const onSendInvitationClick = useCallback(async () => {
    if (!isInvitationSent) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-mock-match-request-body': 'true'
        },
        body: JSON.stringify({ studentId: student.id })
      };

      const response = await fetch(
        'https://69dd40e2-488f-4731-b0e0-b4671a6138ae.mock.pstmn.io/send-invitation',
        requestOptions
      );

      response.status === 200 ? setIsInvitationSent(true) : console.error(response);
    }
  }, [student]);

  const onAddToBookmarkClick = useCallback(async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-mock-match-request-body': 'true'
      },
      body: JSON.stringify({ studentId: student.id })
    };

    const response = await fetch(
      'https://69dd40e2-488f-4731-b0e0-b4671a6138ae.mock.pstmn.io/bookmarked-students',
      requestOptions
    );

    response.status === 200 ? setIsInBookmarks(prevState => !prevState) : console.error(response);
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

import React from 'react';

import { StudentImage, StudentData } from 'atoms';
import { IStudentDataProps, ShowCVButtonText } from 'context';
import { StudentPreviewCardWrapper, ShowCVButton, Bookmark, ButtonsWrapper } from './styled';

export interface IStudentProps {
  student: IStudentDataProps
}

export interface IStudentPreviewCard extends IStudentProps {
  onCardClick: (studentId: number) => void,
  isCardActive: boolean,
  isInBookmarks: boolean,
  onAddToBookmarks: (studentId: number) => void,
}

export const StudentPreviewCard: React.FC<IStudentPreviewCard> = ({
  student,
  isCardActive,
  isInBookmarks,
  onAddToBookmarks,
  onCardClick
}) => {
  const { img, firstName, lastName, id } = student;

  const onClick = () => onCardClick(id);

  const onAddToBookmarksClick = () => onAddToBookmarks(id);

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onClick}>
      <StudentImage userPicture={img} firstName={firstName} lastName={lastName} />

      <StudentData student={student} />

      <ButtonsWrapper>
        <ShowCVButton onClick={onClick} text={ShowCVButtonText} />

        <Bookmark isMarked={isInBookmarks} onClick={onAddToBookmarksClick} />
      </ButtonsWrapper>
    </StudentPreviewCardWrapper>
  );
};


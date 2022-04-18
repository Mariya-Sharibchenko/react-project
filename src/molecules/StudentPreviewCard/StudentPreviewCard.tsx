import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { StudentImage, StudentData } from 'atoms';
import { IStudentDataProps, ShowCVButtonText, WindowSize } from 'context';
import { StudentPreviewCardWrapper, ShowCVButton, Bookmark, ButtonsWrapper } from './styled';
import { useWindowSize } from 'utils/getWindowSize';

const { tablet } = WindowSize;

export interface IStudentProps {
  student: IStudentDataProps
}

export interface IStudentPreviewCard extends IStudentProps {
  onCardClick: (studentId: number) => void,
  isCardActive: boolean,
  isInBookmarks: boolean,
  onAddToBookmarkClick: (studentId: number) => void,
}

export const StudentPreviewCard: React.FC<IStudentPreviewCard> = ({
  student,
  isCardActive,
  isInBookmarks,
  onAddToBookmarkClick,
  onCardClick
}) => {
  const { img, firstName, lastName, id } = student;

  const windowSize = useWindowSize();

  const onClick = () => onCardClick(id);

  const onAddToBookmarks = useCallback(() => onAddToBookmarkClick(id), [student]);

  return (
    <>
      { windowSize && windowSize.width < tablet ?
        <StudentPreviewCardWrapper active={isCardActive} onClick={onClick}>
          <StudentImage userPicture={img} firstName={firstName} lastName={lastName} />

          <StudentData student={student} />

          <ButtonsWrapper>
            <Link to={id.toString()}>
              <ShowCVButton onClick={onClick} text={ShowCVButtonText} />
            </Link>

            <Bookmark isMarked={isInBookmarks} onClick={onAddToBookmarks} />
          </ButtonsWrapper>
        </StudentPreviewCardWrapper> :

        <Link to={id.toString()}>
          <StudentPreviewCardWrapper active={isCardActive} onClick={onClick}>
            <StudentImage userPicture={img} firstName={firstName} lastName={lastName} />

            <StudentData student={student} />

            <ButtonsWrapper>
              <ShowCVButton onClick={onClick} text={ShowCVButtonText} />

              <Bookmark isMarked={isInBookmarks} onClick={onAddToBookmarks} />
            </ButtonsWrapper>
          </StudentPreviewCardWrapper>
        </Link>
      }
    </>
  );
};


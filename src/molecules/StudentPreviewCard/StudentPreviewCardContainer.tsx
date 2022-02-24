import React, { useCallback, useState } from 'react';

import { IStudentProps, StudentPreviewCard } from './StudentPreviewCard';

interface IStudentPreviewCardContainer extends IStudentProps {
  isInBookmarks: boolean,
  onAddToBookmarks: (studentId: number) => void,
}

export const StudentPreviewCardContainer: React.FC<IStudentPreviewCardContainer> = ({
  student,
  isInBookmarks,
  onAddToBookmarks
}) => {
  const [ isCardActive, setIsCardActive ] = useState<boolean>(true);

  const onClick = useCallback(() => {
    setIsCardActive(prevState => !prevState);
  }, []);

  return (
    <StudentPreviewCard
      isCardActive={isCardActive}
      onCardClick={onClick}
      student={student}
      isInBookmarks={isInBookmarks}
      onAddToBookmarkClick={onAddToBookmarks}
    />
  );
};

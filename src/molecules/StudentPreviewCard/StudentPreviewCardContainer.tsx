import React, { useCallback, useState } from 'react';

import { IStudentProps, StudentPreviewCard } from './StudentPreviewCard';

export const StudentPreviewCardContainer: React.FC<IStudentProps> = ({student}) => {
  const [ isCardActive, setIsCardActive ] = useState<boolean>(true)

  const onClick = useCallback(() => {
    setIsCardActive(prevState => !prevState)
  }, []);

  return (
    <StudentPreviewCard isCardActive={isCardActive}
                        onCardClick={onClick}
                        student={student}
    />
  )
};

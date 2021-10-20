import React, { useState } from 'react';

import { StudentPreviewCardWrapper, StudentData, StudentPicture, StudentInitials, StudentName, StudentAdditionalInfo, TagsWrapper} from './styled';
import { Tag } from 'atoms/Tag';
import { IStudentDataProps } from 'context';
import { getInitials } from './utils/getInitials';
import { getAgeString } from './utils/getAgeString';

export const StudentPreviewCard: React.FC<IStudentDataProps> = ({ img,
                                                                  firstName,
                                                                  lastName,
                                                                  position,
                                                                  age,
                                                                  course,
                                                                  bestStudentMark}) => {
  const [ isCardActive, setIsCardActive ] = useState<boolean>(true)

  const onClick = () => {
    setIsCardActive(prevState => !prevState)
  }

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onClick}>
      <StudentPicture userPicture={img}>
        {img ? <></> : <StudentInitials>{getInitials(firstName, lastName)}</StudentInitials>}
      </StudentPicture>
      <StudentData>
        <StudentName>{firstName} {lastName}</StudentName>
        <StudentAdditionalInfo>{position}{age ? `, ${getAgeString(age)}` : ''}</StudentAdditionalInfo>
        <TagsWrapper>
          <Tag isBestStudent={false} isSmall={true} text={course}/>
          {bestStudentMark ? <Tag isBestStudent={true} isSmall={true} text="Лучший ученик"/> : <></>}
        </TagsWrapper>
      </StudentData>
    </StudentPreviewCardWrapper>
  )
};


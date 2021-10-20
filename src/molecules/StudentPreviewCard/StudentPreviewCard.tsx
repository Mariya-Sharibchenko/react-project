import React, { useState } from 'react';

import { StudentPreviewCardWrapper, StudentData, StudentName, StudentAdditionalInfo, TagsWrapper} from './styled';
import { StudentImage } from 'atoms/StudentImage';
import { Tag } from 'atoms/Tag';
import { IStudentDataProps } from 'context';
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
      <StudentImage userPicture={img} isInCircle={false} firstName={firstName} lastName={lastName}/>
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


import React, { useState } from 'react';

import { StudentPreviewCardWrapper, StudentData, StudentPicture, StudentInitials, StudentName, StudentAdditionalInfo, CourseTag, BestStudentTag, TagsWrapper} from './styled';
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
          <CourseTag>{course}</CourseTag>
          {bestStudentMark ? <BestStudentTag>Лучший ученик</BestStudentTag> : <></>}
        </TagsWrapper>
      </StudentData>
    </StudentPreviewCardWrapper>
  )
};


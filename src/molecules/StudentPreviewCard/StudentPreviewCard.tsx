import React from 'react';

import { StudentPreviewCardWrapper, StudentData, StudentName, StudentAdditionalInfo, TagsWrapper} from './styled';
import { StudentImage } from 'atoms/StudentImage';
import { Tag } from 'atoms/Tag';
import { IStudentDataProps } from 'mock';
import { getAgeString } from './utils/getAgeString';

export interface IStudentProps {
  student: IStudentDataProps
}

export interface IStudentPreviewCard extends IStudentProps {
  onCardClick: () => void,
  isCardActive: boolean,
}

export const StudentPreviewCard: React.FC<IStudentPreviewCard> = ({ student,
                                                                    isCardActive ,
                                                                    onCardClick }) => {

  const { img, firstName, lastName, position, age, course, bestStudentMark } = student;

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onCardClick}>
      <StudentImage userPicture={img} isInCircle={false} firstName={firstName} lastName={lastName}/>
      <StudentData>
        <StudentName>{firstName} {lastName}</StudentName>
        <StudentAdditionalInfo>{position}{age ? `, ${getAgeString(age)}` : ''}</StudentAdditionalInfo>
        <TagsWrapper>
          <Tag isBestStudent={false} isSmall={true} text={course}/>
          {bestStudentMark ? <Tag isBestStudent={bestStudentMark} isSmall={true} text=''/> : <></>}
        </TagsWrapper>
      </StudentData>
    </StudentPreviewCardWrapper>
  )
};


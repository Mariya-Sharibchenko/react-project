import React, { useMemo } from 'react';

import { StudentImage } from 'atoms/StudentImages';
import { SmallTag } from 'atoms/Tags';
import { IStudentDataProps } from 'context';

import { StudentPreviewCardWrapper, StudentData, StudentName, StudentAdditionalInfo, TagsWrapper} from './styled';
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

  const ageString = useMemo(() => age && `, ${getAgeString(age)}`, [age]);

  return (
    <StudentPreviewCardWrapper active={isCardActive} onClick={onCardClick}>
      <StudentImage userPicture={img} firstName={firstName} lastName={lastName}/>

      <StudentData>
        <StudentName>{firstName} {lastName}</StudentName>

        <StudentAdditionalInfo>{position}{ageString}</StudentAdditionalInfo>

        <TagsWrapper>
          <SmallTag isBestStudent={false} text={course}/>
          {bestStudentMark && <SmallTag isBestStudent={bestStudentMark} text=''/>}
        </TagsWrapper>
      </StudentData>
    </StudentPreviewCardWrapper>
  )
};


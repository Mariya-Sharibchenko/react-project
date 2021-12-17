import React, { useMemo } from 'react';

import { BookmarkButton } from 'atoms/BookmarkButton';
import {
  CourseScoreTitlesForStudentCV,
  DiplomaTitlesForStudentCV,
  SchoolRecommendationTitlesForStudentCV,
  InviteButtonText,
  IStudentDetailedDataProps,
  SkillsTitlesForStudentCV,
  EducationTitlesForStudentCV,
  AboutStudentTitlesForStudentCV,
  ContactsTitlesForStudentCV
} from 'context';
import { getAgeString } from 'utils/getAgeString';

import {
  StudentCVWrapper,
  StudentCVHeaderWrapper,
  StudentCVHeader,
  StudentCVHeaderBtnsWrapper,
  StudentCVHeaderInfoWrapper,
  StudentName,
  StudentCourseAndAge,
  ButtonInvite, StudentCVBody, HeaderBackgroundMask,
  StudentCVInfoList,
  StudentCVInfoItem,
  StudentCVInfoTitle,
  StudentCVInfoContent,
  StudentCVDiplomaLink
} from './styled';
import { CourseAndScore } from '../../atoms/CourseAndScore';

export interface IStudentCVProps {
  student: IStudentDetailedDataProps,
  isMarked: boolean,
}

export const StudentCV: React.FC<IStudentCVProps> = ({ student, isMarked}) => {
  const {img, firstName, lastName, position, age, diplomaLink, course, score, skills, education, aboutStudent, schoolRecommendation, contacts, showContacts} = student;

  const ageString = useMemo(() => age && `, ${getAgeString(age)}`, [age]);

  return (
    <StudentCVWrapper>
      <StudentCVHeaderWrapper>
        <HeaderBackgroundMask/>

        <StudentCVHeader img={img}>
        <StudentCVHeaderInfoWrapper>
          <StudentName>{firstName} {lastName}</StudentName>

          <StudentCourseAndAge>{position}{ageString}</StudentCourseAndAge>
        </StudentCVHeaderInfoWrapper>

        <StudentCVHeaderBtnsWrapper>
          <ButtonInvite text={InviteButtonText}/>

          <BookmarkButton isMarked={isMarked}/>
        </StudentCVHeaderBtnsWrapper>
        </StudentCVHeader>
      </StudentCVHeaderWrapper>

      <StudentCVBody>
        <StudentCVInfoList>
          <StudentCVInfoItem>
            <StudentCVInfoTitle>{CourseScoreTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>
              <CourseAndScore course={course} score={score}/>
            </StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{DiplomaTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>
              <StudentCVDiplomaLink href={diplomaLink}>{diplomaLink}</StudentCVDiplomaLink>
            </StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{SchoolRecommendationTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>{schoolRecommendation}</StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{SkillsTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>

            </StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{EducationTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>

            </StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{AboutStudentTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>{aboutStudent}</StudentCVInfoContent>
          </StudentCVInfoItem>

          <StudentCVInfoItem>
            <StudentCVInfoTitle>{ContactsTitlesForStudentCV}</StudentCVInfoTitle>

            <StudentCVInfoContent>
              {showContacts ? contacts.eMail : 'Контакты студента станут вам доступны после принятия вашего приглашения.'}
            </StudentCVInfoContent>
          </StudentCVInfoItem>
        </StudentCVInfoList>
      </StudentCVBody>
    </StudentCVWrapper>
  )
};

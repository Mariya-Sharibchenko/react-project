import React, { useMemo } from 'react';

import { BookmarkButton } from 'atoms/BookmarkButton';
import {
  TextFieldForStudentCV,
  DiplomaLinkFieldForStudentCV,
  SkillsFieldForStudentCV,
  CourseFieldForStudentCV,
  EducationFieldForStudentCV,
  ContactsFieldForStudentCV
} from 'atoms/FieldsForStudentCV';
import {
  CourseScoreTitleForStudentCV,
  DiplomaTitleForStudentCV,
  SchoolRecommendationTitleForStudentCV,
  InviteButtonText,
  IStudentDetailedDataProps,
  SkillsTitleForStudentCV,
  EducationTitleForStudentCV,
  AboutStudentTitleForStudentCV,
  ContactsTitleForStudentCV
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
  StudentCVInfoItem
} from './styled';

export interface IStudentCVProps {
  student: IStudentDetailedDataProps,
  isMarked: boolean,
  onAddToBookmarkClick: () => void,
  onSendInvitationClick: () => void,
}

export const StudentCV: React.FC<IStudentCVProps> = ({ student, isMarked, onAddToBookmarkClick, onSendInvitationClick }) => {
  const {
    img,
    firstName,
    lastName,
    position,
    age,
    diplomaLink,
    course,
    score,
    skills,
    education,
    aboutStudent,
    schoolRecommendation,
    contacts,
    showContacts
  } = student;

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
            <ButtonInvite text={InviteButtonText} onClick={onSendInvitationClick}/>

            <BookmarkButton isMarked={isMarked} onClick={onAddToBookmarkClick}/>
          </StudentCVHeaderBtnsWrapper>
        </StudentCVHeader>
      </StudentCVHeaderWrapper>

      <StudentCVBody>
        <StudentCVInfoItem>
          <CourseFieldForStudentCV title={CourseScoreTitleForStudentCV} course={course} score={score} />
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <DiplomaLinkFieldForStudentCV link={diplomaLink} title={DiplomaTitleForStudentCV} text={diplomaLink} />
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <TextFieldForStudentCV title={SchoolRecommendationTitleForStudentCV} content={schoolRecommendation} />
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <SkillsFieldForStudentCV title={SkillsTitleForStudentCV} skills={skills} />
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <EducationFieldForStudentCV title={EducationTitleForStudentCV} education={education}/>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <TextFieldForStudentCV title={AboutStudentTitleForStudentCV} content={aboutStudent}/>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <ContactsFieldForStudentCV title={ContactsTitleForStudentCV} isShowed={showContacts} contacts={contacts} />
        </StudentCVInfoItem>
      </StudentCVBody>
    </StudentCVWrapper>
  )
};

import React, { useMemo } from 'react';

import { BookmarkButton } from 'atoms/BookmarkButton';
import { CourseAndScore } from 'atoms/CourseAndScore';
import { EducationInfoForStudentCV, ContactsInfoForStudentCV } from 'atoms/DetailedFieldsForStudentCV';
import {
  CourseScoreTitleForStudentCV,
  DiplomaTitleForStudentCV,
  SchoolRecommendationTitleForStudentCV,
  InviteButtonText,
  IStudentDetailedDataProps,
  SkillsTitleForStudentCV,
  EducationTitleForStudentCV,
  AboutStudentTitleForStudentCV,
  ContactsTitleForStudentCV, ContactsAreHiddenText
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
  StudentCVInfoItem,
  StudentCVInfoTitle,
  StudentCVInfoContent, StudentCVInfoText,
  StudentCVDiplomaLink, StudentCVSkillsList,
  StudentCVSkillsItem, StudentCVTag,
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
          <StudentCVInfoTitle>{CourseScoreTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <CourseAndScore course={course} score={score}/>
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{DiplomaTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <StudentCVDiplomaLink href={diplomaLink}>{diplomaLink}</StudentCVDiplomaLink>
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{SchoolRecommendationTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <StudentCVInfoText>{schoolRecommendation}</StudentCVInfoText>
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{SkillsTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <StudentCVSkillsList>
              {skills.map((item) =>
                <StudentCVSkillsItem key={item}>
                  <StudentCVTag text={item}/>
                </StudentCVSkillsItem>
              )}
            </StudentCVSkillsList>
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{EducationTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <EducationInfoForStudentCV formal={education.formal}
                                       additional={education.additional}
                                       english={education.english}
            />
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{AboutStudentTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            <StudentCVInfoText>{aboutStudent}</StudentCVInfoText>
          </StudentCVInfoContent>
        </StudentCVInfoItem>

        <StudentCVInfoItem>
          <StudentCVInfoTitle>{ContactsTitleForStudentCV}</StudentCVInfoTitle>

          <StudentCVInfoContent>
            {showContacts
              ? <ContactsInfoForStudentCV city={contacts.city}
                                          tel={contacts.tel}
                                          eMail={contacts.eMail}
                                          socialMedia={contacts.socialMedia}/>
              : ContactsAreHiddenText}
          </StudentCVInfoContent>
        </StudentCVInfoItem>
      </StudentCVBody>
    </StudentCVWrapper>
  )
};

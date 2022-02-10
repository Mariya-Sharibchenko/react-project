import React, { useMemo } from 'react';

import {
  StudentListWrapper,
  StudentListHeader,
  AmountOfFoundCV,
  FilterWrapper,
  FilterText,
  StudentsArrayWrapper,
  StudentCardsWrapper,
  StudentCVsWrapper,
} from './styled';
import { FilterContainer } from 'atoms/Filter/FilterContainer';
import { StudentCV } from 'molecules/StudentCV';
import { StudentPreviewCard } from 'molecules/StudentPreviewCard';
import {
  AmountOfFoundCVText,
  FilterForStudentList,
  FilterLabel,
  IFilterProps,
  IStudentDetailedDataProps
} from 'context';

export interface IStudentListProps {
  studentList: IStudentDetailedDataProps[],
  onCardClick: (studentId: number) => void,
  activeStudent: IStudentDetailedDataProps | null,
  markedCV: number[],
  onAddToBookmarkClick: (studentId: number) => void,
  onSendInvitationClick: (studentId: number) => void,
  setFilterOptions: (options: IFilterProps) => void,
}

export const StudentList: React.FC<IStudentListProps> = ({
  studentList,
  activeStudent,
  onCardClick,
  markedCV,
  onAddToBookmarkClick,
  onSendInvitationClick,
  setFilterOptions
}) => {

  const studentAmount = useMemo(() => studentList.length, [studentList]);

  return (
    <StudentListWrapper>
      <StudentListHeader>
        <AmountOfFoundCV>{AmountOfFoundCVText}: {studentAmount}</AmountOfFoundCV>

        <FilterWrapper>
          <FilterText>{FilterLabel}:</FilterText>
          <FilterContainer filterData={FilterForStudentList} getOptions={setFilterOptions} />
        </FilterWrapper>
      </StudentListHeader>

      <StudentsArrayWrapper>
        <StudentCardsWrapper>
          {studentList.map((student) =>
            <StudentPreviewCard
              student={student}
              isCardActive={student.id === activeStudent?.id}
              onCardClick={onCardClick}
              key={student.id}
            />
          )}
        </StudentCardsWrapper>

        <StudentCVsWrapper>
          {
            activeStudent &&
            <StudentCV
              isMarked={markedCV.includes(activeStudent.id)}
              student={activeStudent}
              onAddToBookmarkClick={onAddToBookmarkClick}
              onSendInvitationClick={onSendInvitationClick}
            />
          }
        </StudentCVsWrapper>
      </StudentsArrayWrapper>
    </StudentListWrapper>
  )
};

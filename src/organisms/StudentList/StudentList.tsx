import React, { useMemo } from 'react';
import { useOutletContext, Outlet } from 'react-router-dom';

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
import { FilterContainer } from 'atoms';
import { StudentPreviewCard } from 'molecules';
import {
  AmountOfFoundCVText,
  FilterForStudentList,
  FilterLabel,
  IFilterProps,
  IStudentDetailedDataProps,
  WindowSize

} from 'context';
import { useWindowSize } from 'utils/getWindowSize';
import { IStudentCVProps } from 'molecules/StudentCV/StudentCV';

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
  const windowSize = useWindowSize();

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
              isInBookmarks={markedCV.includes(student.id)}
              isCardActive={student.id === activeStudent?.id}
              onCardClick={onCardClick}
              key={student.id}
              onAddToBookmarkClick={onAddToBookmarkClick}
            />
          )}
        </StudentCardsWrapper>

        {windowSize && windowSize.width > WindowSize.laptop &&
          <StudentCVsWrapper>
            {activeStudent &&
              <Outlet
                context={{
                  isMarked: markedCV.includes(activeStudent.id),
                  student: activeStudent,
                  onAddToBookmarkClick,
                  onSendInvitationClick
                }}
              />
            }
          </StudentCVsWrapper>
        }
      </StudentsArrayWrapper>
    </StudentListWrapper>
  );
};

export const useStudentCVData = () => useOutletContext<IStudentCVProps>();

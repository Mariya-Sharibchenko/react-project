import React, { useMemo } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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
  WindowSize,
  Paths
} from 'context';
import { useWindowSize } from 'utils/getWindowSize';
import { StudentCVPage } from 'pages';

export interface IStudentListProps {
  studentList: IStudentDetailedDataProps[],
  onCardClick: (studentId: number) => void,
  activeStudent: IStudentDetailedDataProps | null,
  markedCV: number[],
  onAddToBookmarkClick: (studentId: number) => void,
  setFilterOptions: (options: IFilterProps) => void,
}

export const StudentList: React.FC<IStudentListProps> = ({
  studentList,
  activeStudent,
  onCardClick,
  markedCV,
  onAddToBookmarkClick,
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
              <Routes>
                <Route path={Paths.home} element={<Navigate to={activeStudent.id.toString()} />}>
                  <Route path=':studentId' element={<Navigate to={activeStudent.id.toString()} />} />
                </Route>

                <Route
                  path={activeStudent.id.toString()}
                  element={
                  <StudentCVPage
                    student={activeStudent}
                    isMarked={markedCV.includes(activeStudent.id)}
                  />}
                  key={activeStudent.id}
                />
              </Routes>
            }
          </StudentCVsWrapper>
        }
      </StudentsArrayWrapper>
    </StudentListWrapper>
  );
};

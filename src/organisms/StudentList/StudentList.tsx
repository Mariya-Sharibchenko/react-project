import React, { useMemo, useState } from 'react';

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
import { StudentPreviewCard} from 'molecules/StudentPreviewCard';
import { StudentCV } from 'molecules/StudentCV';
import {
  AmountOfFoundCVText,
  FilterForStudentList,
  FilterLabel,
  IFilterProps,
  IStudentDetailedDataProps
} from 'context';
import { sortStudentList } from './utils/sortStudentList';

export interface IStudentListProps {
  studentList: IStudentDetailedDataProps[],
  isCardActive: boolean,
  onCardClick: () => void,
  activeStudent: IStudentDetailedDataProps,
  isCVMarked: boolean,
  onAddToBookmarkClick: () => void,
  onSendInvitationClick: () => void,
}

export const StudentList: React.FC<IStudentListProps> = ({
  studentList,
  activeStudent,
  isCardActive,
  onCardClick,
  isCVMarked,
  onAddToBookmarkClick,
  onSendInvitationClick
}) => {
  const [ filterOption, setFilterOption ] = useState('');
  const studentAmount = useMemo(() => studentList.length, [studentList]);
  const sortedStudentList = useMemo(() => sortStudentList(filterOption, studentList), [filterOption, studentList]);

  const setOption = (options: IFilterProps) => {
    const { optionsArray } = options;
    const checkedOption = optionsArray.find(({isChecked}) => isChecked)
    setFilterOption(checkedOption ? checkedOption.label : '');
  };

  return (
    <StudentListWrapper>
      <StudentListHeader>
        <AmountOfFoundCV>{AmountOfFoundCVText}: {studentAmount}</AmountOfFoundCV>

        <FilterWrapper>
          <FilterText>{FilterLabel}:</FilterText>
          <FilterContainer filterData={FilterForStudentList} getOptions={setOption} />
        </FilterWrapper>
      </StudentListHeader>

      <StudentsArrayWrapper>
        <StudentCardsWrapper>
          {sortedStudentList.map((student) =>
            <StudentPreviewCard
              student={student}
              isCardActive={isCardActive}
              onCardClick={onCardClick}
              key={student.id}
            />
          )}
        </StudentCardsWrapper>

        <StudentCVsWrapper>
          <StudentCV
            isMarked={isCVMarked}
            student={activeStudent}
            onAddToBookmarkClick={onAddToBookmarkClick}
            onSendInvitationClick={onSendInvitationClick}
          />
        </StudentCVsWrapper>
      </StudentsArrayWrapper>
    </StudentListWrapper>
  )
};

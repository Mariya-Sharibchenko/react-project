import React, { useEffect, useMemo, useState } from 'react';

import { StudentList } from './StudentList';
import { IFilterProps, IStudentDetailedDataProps } from 'context';
import { sortStudentList } from './utils/sortStudentList';

export interface IStudentListContainerProps {
  studentList: IStudentDetailedDataProps[],
  onAddToBookmarkClick: (studentId: number) => void,
  onSendInvitationClick: (studentId: number) => void,
  isCVMarked: boolean,
}

export const StudentListContainer: React.FC<IStudentListContainerProps> = ({
  studentList,
  onAddToBookmarkClick,
  onSendInvitationClick,
  isCVMarked,
}) => {
  const [ filterOption, setFilterOption ] = useState('');
  const sortedStudentList = useMemo(() => sortStudentList(filterOption, studentList), [filterOption, studentList]);
  const [ activeStudent, setActiveStudent ] = useState<IStudentDetailedDataProps>(studentList[0]);

  useEffect(() => {
    setActiveStudent(sortedStudentList[0]);
  }, [ filterOption ]);

  const setFilterData = (options: IFilterProps) => {
    const { optionsArray } = options;
    const checkedOption = optionsArray.find(({isChecked}) => isChecked);
    setFilterOption(checkedOption ? checkedOption.label : '');
  };

  const onStudentCardClick = (studentId: number) => {
    const activeStudent = sortedStudentList.find(({ id }) => id === studentId);
    setActiveStudent(activeStudent ? activeStudent : sortedStudentList[0]);
  }

  return (
    <StudentList
      setFilterOptions={setFilterData}
      studentList={sortedStudentList}
      onCardClick={onStudentCardClick}
      activeStudent={activeStudent}
      isCVMarked={isCVMarked}
      onAddToBookmarkClick={onAddToBookmarkClick}
      onSendInvitationClick={onSendInvitationClick}
    />
  )
};
